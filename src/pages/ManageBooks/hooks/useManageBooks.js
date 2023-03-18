import axios from 'axios';
import { useEffect, useReducer } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { getBase64 } from '../../../utils/helpers';

function useManageBooks(edit) {
    
    const initState = {
        title: "",
        image: "",
        image_src: "",
        description: "",
        price: null,
        isLoading: false,
      };
      const { bookId } = useParams();
      const navigate = useNavigate();
    
      const [state, dispatch] = useReducer(
        (bookState, value) => ({ ...bookState, ...value }),
        initState
      );
      
      const onSelectImage = (e) => {
        let file = e.target.files[0];
    
        getBase64(file)
          .then((result) => {
            file["base64"] = result;
            dispatch({
              image: result,
              image_src: URL.createObjectURL(e.target.files[0]),
            });
          })
          .catch((err) => {
            console.log(err);
          });
      };

    useEffect(() => {
        const fetchABook = async() => {
            try{
                const res = await axios.get("http://localhost:8800/books/"+bookId)
                dispatch({
                    title: res.data[0]?.title,
                    image: res.data[0]?.cover,
                    description: res.data[0]?.desc,
                    price: res.data[0]?.price,
                })
            }catch(err) {
                console.log(err)
            }
        }
        if(edit)
        fetchABook()
    }, [bookId, edit])

      const handleAddBook = async(e) =>{
        e.preventDefault()
        //dispatch({ isLoading: true })
        if(!edit) {
            try{
                await axios.post("http://localhost:8800/books", {
                    title: state.title,
                    desc: state.description,
                    cover: state.image,
                    price: state.price,
                }).then(() => {
                    console.log("Product was succesfully created");
                    navigate("/")
                })
            }catch(err) {
                console.log(err)
            }
        } else {
            try{
                await axios.put("http://localhost:8800/books/"+bookId, {
                    title: state.title,
                    desc: state.description,
                    cover: state.image,
                    price: state.price,
                }).then(() => {
                    console.log("Book was updated");
                    navigate("/")
                })
            }catch(err) {
                console.log(err)
            }
        }
        } 
  return {
    dispatch,
    state,
    handleAddBook,
    onSelectImage,
  }
}

export default useManageBooks
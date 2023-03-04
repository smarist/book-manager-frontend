import axios from 'axios';
import React, { useReducer } from 'react'
import { useNavigate, useParams } from 'react-router';

function useManageBooks() {
    const initState = {
        title: "",
        image: "",
        image_src: "",
        description: "",
        price: null,
        isLoading: false,
      };
      const { productId } = useParams();
      const navigate = useNavigate();
    
      const [state, dispatch] = useReducer(
        (productState, value) => ({ ...productState, ...value }),
        initState
      );

      console.log(state)


      const handleAddBook = async(e) =>{
        e.preventDefault()
        //dispatch({ isLoading: true })
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
        } 
  return {
    dispatch,
    state,
    handleAddBook,
  }
}

export default useManageBooks
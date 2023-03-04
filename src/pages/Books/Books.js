import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import styles from './Books.module.scss'
import Button from '../../components/Button/Button';

function Books() {

    const [books, setBooks] = useState([]);
    console.log(books)

    useEffect(() => {
        const fetchAllBooks = async() => {
            try{
                const res = await axios.get("http://localhost:8800/books")
                setBooks(res.data)
            }catch(err) {
                console.log(err)
            }
        }
        fetchAllBooks()
    }, [])
  return (
    <div>
      <h1>Lama Book Shop</h1>
      <Link to="/add-book">
            <Button name="book"/>
      </Link>
      <div className={styles["books"]}>
        {books.map((book) => (
          <div key={book.id} className={styles["book"]}>
            <img src={book.cover} alt={book.title} className={styles.img} />
            <h2>{book.title}</h2>
            <p>{book.desc}</p>
            <span>${book.price}</span>
            {/* <button className="delete" onClick={() => handleDelete(book.id)}>Delete</button> */}
            <button className={styles["update"]}>
              <Link
                to={`/edit-book/${book.id}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Update
              </Link>
            </button>
          </div>
        ))}
      </div>
    </div>
    
  )
}

export default Books
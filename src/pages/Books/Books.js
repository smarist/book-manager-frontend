import React from "react";
import { Link } from "react-router-dom";
import styles from "./Books.module.scss";
import Button from "../../components/Button/Button";
import useBooks from "./hooks/useBooks";
import usePopRoutes from "../../utils/hooks/usePopRoutes";
import Popup from "../../components/Popup";

function Books() {
  const { books, handleDelete } = useBooks();
  usePopRoutes();

  return (
    <>
      <Popup />
      <div>
        <h1>Uc Book Shop</h1>
        <div className={styles["add-btn"]}>
          <Link to="/add-book" className={styles["link"]}>
            <Button name="book" bgColor="red-bg" />
          </Link>
        </div>
        <div className={styles["books"]}>
          {books.map((book) => (
            <div key={book.id} className={styles["book"]}>
              <img src={book.cover} alt={book.title} className={styles.img} />
              <h2>{book.title}</h2>
              <p>{book.desc}</p>
              <span>${book.price}</span>
              <button className="delete" onClick={() => handleDelete(book.id)}>
                Delete
              </button>
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
    </>
  );
}

export default Books;

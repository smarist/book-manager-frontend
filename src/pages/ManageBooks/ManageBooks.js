import React from "react";
import Button from "../../components/Button/Button";
import ImageUploader from "../../components/ImageUploader";
import Number from "../../components/NumberField/Number";
import TextArea from "../../components/TextArea/TextArea";
import TextField from "../../components/TextField";
import useManageBooks from "./hooks/useManageBooks";
import styles from "./ManageBooks.module.scss";

function ManageBooks({ edit }) {
  const { state, dispatch, handleAddBook } = useManageBooks();
  return (
    <div className={styles.manageBooks}>
      <h2 className={styles.manageBookTitle}>
        {edit ? "Update Book" : "New Book"}
      </h2>
      <main className={styles.main}>
        <ImageUploader />
        <TextField
          label="Title"
          name="book-title"
          value={state.title}
          onChange={({ target }) => dispatch({ title: target.value })}
        />
        <TextArea
          label="Description"
          name="description"
          value={state.description}
          onChange={({ target }) => dispatch({ description: target.value })}
        />
        <Number
          label="Price"
          name="book-price"
          units="N"
          value={state.price}
          onChange={({ target }) => dispatch({ price: target.value })}
        />
        <div>
          <Button name="Book" isLoading={state.isLoading} bgColor="red-bg" createFnc={handleAddBook} edit={edit} />
        </div>
      </main>
    </div>
  );
}

export default ManageBooks;

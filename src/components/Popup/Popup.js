import React from "react";
import styles from "./Popup.module.scss";

const AddModal = ({
  ispopupOpen,
  popupComponent,
  showPopup,
  onClose,
}) => {
  function closePopup(){
    showPopup(false)
    onClose?.();
  }
  return (
    <div onClick={closePopup} className={`${styles.popupRoot} ${!ispopupOpen ? styles.popupOpen : undefined}`}>
      <span onClick={(event) => event.stopPropagation()} className={styles.childComponent}>{popupComponent}</span>
    </div>
  );
};

export default AddModal;

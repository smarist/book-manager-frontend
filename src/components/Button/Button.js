import React from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import styles from "./Button.module.scss";

function Button({
  name,
  createFnc,
  bgColor,
  edit,
  disabled,
  isLoading,
  custom,
}) {
  return (
    <button
      className={`${styles.addBtn} ${styles[bgColor]}`}
      onClick={createFnc}
      disabled={disabled}
    >
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className={styles.addTxt}>
          {edit  ? "Update" : "Add"} {name}
        </div>
      )}
    </button>
  );
}

export default Button;

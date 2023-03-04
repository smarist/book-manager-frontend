import React from "react";
import styles from "./TextArea.module.scss";

const TextArea = ({value, name, onChange, label}) => {
  return (
    <div className={styles["form-group"]}>
      <div className={styles["form-container"]}>
        <textarea
          type="text"
          name={name}
          value={value}
          placeholder={`Enter ${label?.toLowerCase()} here`}
          onChange={onChange}
        ></textarea>
        <label htmlFor={name}>{label}</label>
      </div>
    </div>
  );
};

export default TextArea;

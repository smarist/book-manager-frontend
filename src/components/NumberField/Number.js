import React from "react";
import styles from "./Number.module.scss";

const Number = ({
  value,
  name,
  integer,
  units,
  onChange,
  label,
}) => {
  const onChangeHandler = (e) => {
    let formattedValue = parseFloat(e.target.value).toFixed(2);
    let value = formattedValue === "0.00" ? "" : formattedValue;
    e.target.value = value;
  };

  return (
    <div className={styles["form-group"]}>
      <div className={styles["form-container"]}>
        <input
          type="number"
          defaultValue={value}
          // value={props.value}
          name={name}
          placeholder={integer ? "0" : "0.00"}
          pattern={integer ? "d*" : "d.d{2}"}
          onBlur={onChangeHandler}
          onChange={onChange}
        />
        <label htmlFor={name}>{label}</label>
        <span className={styles["currency"]}>{units}</span>
      </div>
    </div>
  );
};

export default Number;

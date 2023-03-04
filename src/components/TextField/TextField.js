import { useState } from "react";
import styles from './TextField.module.scss';
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const TextField = ({
  label,
  name,
  type,
  value,
  onBlur,
  onChange,
}) => {
    const [showPassword, setShowPasssword] = useState(false);
    return (
      <div className={styles["form-group"]}>
        <div className={styles["form-container"]}>
          <input
            type={showPassword ? "text" : type}
            name={name}
            value={value}
            placeholder=" "
            onChange={onChange}
            onBlur={onBlur}
          />
          <label htmlFor={name}>{label}</label>
          {type === "password" && (
            <span
              onClick={() => setShowPasssword(!showPassword)}
              className={styles.passwordEndIcon}
            >
              {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </span>
          )}
        </div>
      </div>
    );
  };

export default TextField;
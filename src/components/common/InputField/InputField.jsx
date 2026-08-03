import "./InputField.css";

import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";

const InputField = ({
  label,
  type,
  placeholder,
  password = false,
}) => {

  const [showPassword, setShowPassword] = useState(false);

  return (

    <div className="input-field">

      <label>{label}</label>

      <div className="input-wrapper">

        <input
          type={
            password
              ? showPassword
                ? "text"
                : "password"
              : type
          }
          placeholder={placeholder}
        />

        {password && (

          <button
            type="button"
            className="password-toggle"
            onClick={() =>
              setShowPassword(!showPassword)
            }
          >

            {showPassword ? (
              <FiEyeOff />
            ) : (
              <FiEye />
            )}

          </button>

        )}

      </div>

    </div>

  );

};

export default InputField;
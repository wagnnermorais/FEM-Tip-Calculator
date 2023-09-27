import "../../styles/Components/Input.css";
import { useState } from "react";

const Input = ({ title, type, name, placeholder, icon, alt, max, handler }) => {
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;

    const numericValue = value.replace(/[^0-9.]/g, "");

    setInputValue(numericValue);

    if (value !== numericValue) {
      setErrorMessage(`${title} must have only numbers, ex: 1234.56`);
    } else {
      setErrorMessage("");
    }

    handler(value);
  };
  return (
    <div>
      <label>
        <span className="label">{title}</span>
        <input
          className="input"
          type={type}
          name={name}
          placeholder={placeholder}
          maxLength={max}
          value={inputValue}
          onChange={handleInputChange}
        />
        {errorMessage && <p style={{ color: "red" }}> {errorMessage} </p>}
        <img className="input-icon" src={icon} alt={alt} />
      </label>
    </div>
  );
};

export default Input;

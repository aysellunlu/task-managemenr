import React from "react";
import classes from "./styles.module.css";

const TextInput = (
  id,
  type = "text",
  placeholder,
  inputValue,
  onChange,
  className="",
  ...props
) => {
  return (
    <input
      id={id}
      className={`${classes.input}`}
      type={type}
      placeholder={placeholder}
      value={inputValue}
      onChange={onChange}
    />
  );
};

export default TextInput;

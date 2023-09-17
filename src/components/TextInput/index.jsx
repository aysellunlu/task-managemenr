import React from "react";
import classes from "./styles.module.css";

const TextInput = ({
  id,
  type = "text",
  placeholder,
  inputValue,
  onChangeTextInput,
  className = "",
  ...props
}) => {

  
  return (
    <input
      className={`${classes.input}`}
      type={type}
      placeholder={placeholder}
      id={inputValue}
      onChange={onChangeTextInput}
    />
  );
};

export default TextInput;

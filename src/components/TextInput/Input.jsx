import React from "react";
import "./styles.module.css";

const Input = (props) => {
  return (
    <input
      id={props.id}
      className="input-style"
      type="text"
      placeholder={props.placeholder}
      value={props.inputValue}
      onChange={props.change}
    />
  );
};

export default Input;
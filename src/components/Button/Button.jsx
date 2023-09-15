import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <button
      className="create-btn"
      type="button"
      onClick={props.onClick}
      id={props.addButtonId}
    >
      {props.buttonText}
    </button>
  );
};

export default Button;

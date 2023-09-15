import React from "react";
import "./Button.css";

const DeleteButton = (props) => {
  return (
    <button className="delete-btn" onClick={props.onClick} >
      X
    </button>
  );
};

export default DeleteButton;

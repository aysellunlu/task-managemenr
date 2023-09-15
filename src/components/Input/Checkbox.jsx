import React from "react";
import "./Input.css";

const Checkbox = (props) => {
  return (
    <input
      className="checkbox-style"
      type="checkbox"
      id={props.id}
      name={props.name}
      value={props.value}
    />
  );
};

export default Checkbox;

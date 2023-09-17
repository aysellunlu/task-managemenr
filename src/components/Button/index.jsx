import React from "react";
import classes from "../Button/styles.module.css";

function Button({ className = "", type = "", children, ...props }) {
  return (
    <button
      className={`${classes.btn} ${classes[type]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;

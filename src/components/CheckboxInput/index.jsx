import React from "react";


const CheckboxInput = ({ id, name, value, className, ...props }) => {
  return <input type="checkbox" id={id} name={name} value={value} />;
};

export default CheckboxInput;

import React from "react";
import "./Text.css";

const TableText = (props) => {
  return (
    <div>
      {" "}
      <p className="table-text">{props.tableText}</p>
      <p className="table-text">{props.tableText}</p>
      <p className="table-text">{props.tableText}</p>
      <p className="table-text">{props.tableText}</p>
      
    </div>
  );
};

export default TableText;

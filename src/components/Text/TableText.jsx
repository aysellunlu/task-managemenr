import React from "react";
import "./Text.css";

const TableText = (props) => {
  return (
    <div>
      {props.tasks.map((task, index) => (
        <p className="table-text" key={index}>
          {task}
        </p>
      ))}
    </div>
  );
};

export default TableText;

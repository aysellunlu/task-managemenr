import React from "react";
import DeleteButton from "../Button/DeleteButton";
import Checkbox from "../Input/Checkbox";
import "./Text.css";

const TableText = (props) => {
  return (
    <div>
      {props.tasks.map((task, index) => (
        <p className="table-text grid-container" key={index}>
          <span className="grid-task">
            <span className="">
              <Checkbox />
            </span>
            {task}
          </span>
          <span className="grid-delete-btn">
            <DeleteButton onClick={props.onClick} />
          </span>
        </p>
      ))}
    </div>
  );
};

export default TableText;

import React from "react";
import TrashIcon from "../../icons/TrashIcon";
import Button from "../Button";
import Checkbox from "../TextInput/Checkbox";
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
            <Button type="dangerBtn">
              <TrashIcon/>
            </Button>
          </span>
        </p>
      ))}
    </div>
  );
};

export default TableText;

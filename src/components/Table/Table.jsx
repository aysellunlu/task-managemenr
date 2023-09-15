import React from "react";
import DeleteButton from "../Button/DeleteButton";
import TableText from "../Text/TableText";
import "./Table.css";

const Table = (props) => {
  return (
    <div className="table-style">
      <TableText tasks={props.tasks} onClick={props.onClick} />
    </div>
  );
};

export default Table;

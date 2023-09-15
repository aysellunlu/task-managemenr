import React from "react";
import TableText from "../Text/TableText";
import "./Table.css";

const Table = (props) => {
  return (
    <div className="table-style">
      <TableText tasks={props.tasks} />
    </div>
  );
};

export default Table;

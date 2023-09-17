import React from "react";
import classes from "./styles.module.css";
import TrashIcon from "../../icons/TrashIcon";
import CheckboxInput from "../CheckboxInput";
import Button from "../Button";

const TaskRow = ({
  className = "",
  type = "dangerBtn",
  children,
  onClickDelete,
  ...props
}) => {
  return (
    <div className={`${classes.container}`}>
      <div className={`${classes.checkboxColumn}`}>
        <CheckboxInput />
      </div>
      <div className={`${classes.textColumn}`}>{children}</div>
      <Button type="closeBtn" onClick={onClickDelete}>
        <TrashIcon />
      </Button>
    </div>
  );
};

export default TaskRow;

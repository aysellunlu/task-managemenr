import React from "react";
import classes from "./styles.module.css";
import TrashIcon from "../../icons/TrashIcon";
import CheckboxInput from "../CheckboxInput";

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
      <div
        className={`${classes.trashBtnColumn} ${classes["trashBg"]}`}
        type="button"
        onClick={onClickDelete}
      >
        <TrashIcon />
      </div>
    </div>
  );
};

export default TaskRow;

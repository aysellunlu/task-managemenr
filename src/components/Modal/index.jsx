import React from "react";
import Button from "../Button/index";
import TextInput from "../TextInput";
import "./Modal.css";
import classes from "./styles.module.css";

const Modal = ({
  children,
  closeClick,
  onClickAdd,
  placeholder,
  id,
  onChange,
  inputValue,
  ...props
}) => {
  return (
    <div className={`${classes.modalBg}`}>
      <div className={`${classes.gridContainer}`}>
        <div className={`${classes.gridTitle}`}>
          <div className={`${classes.modalText}`}>{children}</div>
        </div>
        <div className={`${classes.gridCloseBtn}`}>
          <Button onClick={closeClick} type="dangerBtn">
            X
          </Button>
        </div>
      </div>
      <TextInput
        placeholder="Enter task name"
        id={id}
        onChange={onChange}
        inputValue={inputValue}
      />
      <Button onClick={onClickAdd} type="primaryBtn">
        + Create task
      </Button>
    </div>
  );
};

export default Modal;

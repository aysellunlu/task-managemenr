import React from "react";
import Button from "../Button/index";
import TextInput from "../TextInput";
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
      <div className={`${classes.gridContainer}`}>
        <div className={`${classes.gridInput}`}>
          <TextInput
            placeholder={placeholder}
            id={id}
            onChange={onChange}
            inputValue={inputValue}
          />
        </div>
        <Button onClick={onClickAdd} type="primaryBtn">
          + Create task
        </Button>
      </div>
    </div>
  );
};

export default Modal;

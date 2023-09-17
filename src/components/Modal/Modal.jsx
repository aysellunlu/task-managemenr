import React from "react";
import Button from "../Button/Button";
// import Input from "../Input/Input";
import "./Modal.css";

const Modal = ({children,...props}) => {
  return (
    <div className="modal-bg">
      <div className="grid-container">
        <div className="grid-title">
          <div className="modal-title">
            {children}
          </div>
        </div>
        <div className="grid-close-btn">
          {/* <CloseButton click={props.closeClick} /> */}
          <Button type="dangerBtn">X</Button>
        </div>
      </div>
      {/* <Input
        placeholder={props.placeholder}
        inputId={props.inputValue}
        inputValue={props.inputValue}
        change={props.change}
      /> */}
      {/* <Button buttonText={props.modalBtnText} onClick={props.onClickAdd} /> */}
      <Button type="primaryBtn">+ Create task</Button>
    </div>
  );
};

export default Modal;

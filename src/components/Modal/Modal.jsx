import React from "react";
import Button from "../Button/Button";
import CloseButton from "../Button/CloseButton";
import Input from "../Input/Input";
import ModalText from "../Text/ModalText";
import "./Modal.css";

const Modal = (props) => {
  return (
    <div className="modal-bg">
      <div className="grid-container">
        <div className="grid-title">
          <ModalText text={props.info} />
        </div>
        <div className="grid-close-btn">
          <CloseButton click={props.closeClick} />
        </div>
      </div>
      <Input
        placeholder={props.placeholder}
        inputId={props.inputValue}
        inputValue={props.inputValue}
        change={props.change}
      />
      <Button
        buttonText={props.modalBtnText}
        addButtonId={props.createButton}
        onClick={props.onClickAdd}
      />
    </div>
  );
};

export default Modal;

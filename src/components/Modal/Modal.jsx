import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import ModalText from "../Text/ModalText";
import "./Modal.css";

const Modal = (props) => {
  return (
    <div className="modal-bg">
      <ModalText text={props.info} />
      <Input placeholder={props.placeholder}/>
      <Button buttonText={props.modalBtnText}/>
    </div>
  );
};

export default Modal;

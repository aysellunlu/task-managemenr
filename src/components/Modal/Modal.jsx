import React from "react";
import ModalText from "../Text/ModalText";
import "./Modal.css";

const Modal = (props) => {
  return (
    <div className="modal-bg">
      <ModalText text={props.info} />
    </div>
  );
};

export default Modal;

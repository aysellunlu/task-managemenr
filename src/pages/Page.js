import React, { useState } from "react";
import Button from "../components/Button/Button";
import "../App.css";
import Table from "../components/Table/Table";
import MainTitle from "../components/Text/MainTitle";
import Modal from "../components/Modal/Modal";

const Page = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const inputValue = document.getElementById("inputValue");
  const createButton = document.getElementById("createButton");

  const onClickAdd = () => {
    console.log("buton çalıştı");
  };

  return (
    <div className="container">
      <MainTitle MainTitle="Task Management System" />
      <Button buttonText="+ Add Task" onClick={openModal} />
      {modalOpen && (
        <Modal
          info="Create the task please"
          placeholder="Task name"
          modalBtnText="+ Create"
          closeClick={closeModal}
          inputId={inputValue}
          createButton={createButton}
          onClickAdd={onClickAdd}
        />
      )}
      <div className="table-container">
        <Table taskText="Task management task-1" />
      </div>
    </div>
  );
};

export default Page;

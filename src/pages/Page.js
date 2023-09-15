import React, { useState, useEffect } from "react";
import Button from "../components/Button/Button";
import "../App.css";
import Table from "../components/Table/Table";
import MainTitle from "../components/Text/MainTitle";
import Modal from "../components/Modal/Modal";

const Page = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [storedText, setStoredText] = useState("");

  useEffect(() => {
    const savedText = localStorage.getItem("inputValue");
    if (savedText) {
      setStoredText(savedText);
    }
  }, []);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const createButton = document.getElementById("createButton");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onClickAdd = () => {
    console.log("buton çalıştı");
    setModalOpen(false);
    localStorage.setItem("inputValue", inputValue);
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
          inputValue={inputValue}
          change={handleInputChange}
        />
      )}
      <div className="table-container">
        <Table taskText={storedText} />
        {console.log(inputValue)}
      </div>
    </div>
  );
};

export default Page;

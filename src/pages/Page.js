import React, { useState, useEffect } from "react";
import Button from "../components/Button/Button";
import "../App.css";
import Table from "../components/Table/Table";
import MainTitle from "../components/Text/MainTitle";
import Modal from "../components/Modal/Modal";

const Page = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onClickAdd = () => {
    console.log("buton çalıştı");
    setModalOpen(false);
    localStorage.setItem("inputValue", inputValue);
    if (inputValue.trim() !== "") {
      setTasks([...tasks, inputValue]);
      setInputValue("");
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
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
          onClickAdd={onClickAdd}
          inputValue={inputValue}
          change={handleInputChange}
        />
      )}
      <Table tasks={tasks} onClick={handleDeleteTask} />
    </div>
  );
};

export default Page;

import React, { useState, useEffect } from "react";
import Button from "../components/Button/index";
import "../App.css";
import Modal from "../components/Modal/index";
import TaskRow from "../components/TaskRow";

const Page = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  // useEffect(() => {
  //   localStorage.setItem("tasks", JSON.stringify(tasks));
  // }, [tasks]);

  // useEffect(() => {
  //   const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  //   setTasks(savedTasks);
  // }, []);

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
    setModalOpen(false);
    localStorage.setItem("inputValue", inputValue);
    if (inputValue.trim()) {
      const newTasks = [...tasks, inputValue];
      localStorage.setItem("tasks", JSON.stringify(newTasks));
      setTasks(newTasks);
      setInputValue("");
    }
  };

  const handleDeleteTask = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  return (
    <div className="container">
      <h1>Task Management System</h1>
      <Button type="primaryBtn" onClick={openModal}>
        + Add Task
      </Button>
      {tasks.map((task, index) => (
        <TaskRow key={index} onClickDelete={handleDeleteTask}>
          {task}
        </TaskRow>
      ))}
      {modalOpen && (
        <Modal
          children="Create the task please"
          placeholder="Task name"
          closeClick={closeModal}
          id={inputValue}
          onClickAdd={onClickAdd}
          inputValue={inputValue}
          change={handleInputChange}
        />
      )}
    </div>
  );
};

export default Page;

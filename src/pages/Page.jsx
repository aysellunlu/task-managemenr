import React, { useState, useEffect } from "react";
import Button from "../components/Button/index";
import "../App.css";
import Modal from "../components/Modal/index";
import TaskRow from "../components/TaskRow";
import classes from "./styles.module.css";

const Page = ({ className = "", ...props }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onClickAdd = (taskId) => {
    setModalOpen(false);
    if (inputValue.trim()) {
      const newTasks = [...tasks, inputValue];
      localStorage.setItem("tasks", JSON.stringify(newTasks));
      setTasks(newTasks);
      setInputValue("");

      const taskId = tasks.length+1;
      console.log("task id:", taskId);
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
      <div className={`${classes.taskContainer}`}>
        {tasks.map((task, index) => (
          <TaskRow key={index} onClickDelete={handleDeleteTask}>
            {task}
          </TaskRow>
        ))}
      </div>
      {modalOpen && (
        <Modal
          children="Create the task please"
          placeholder="Task name"
          closeClick={closeModal}
          id={inputValue}
          onClickAdd={onClickAdd}
          inputValue={inputValue}
          onChange={handleInputChange}
        />
      )}
    </div>
  );
};

export default Page;

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
    console.log("task", tasks);
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

  const onClickAdd = (text) => {
    setModalOpen(false);
    setTasks((tasks) => {
      let newId = 1;
      const lastTask = tasks[tasks.length - 1];
      if (lastTask) newId = lastTask.id + 1;
      const newTasks = [...tasks, { id: newId, text }];
      localStorage.setItem("tasks", JSON.stringify(newTasks));
      return [...tasks, { id: newId, text }];
    });
  };

  const handleClickDelete = (id) => {
    setTasks(tasks);
    const newTasks = tasks.filter((task) => task.id !== id);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  return (
    <div className="container">
      {console.log("bu", tasks)}
      <h1>Task Management System</h1>
      <Button type="primaryBtn" onClick={openModal}>
        + Add Task
      </Button>
      <div className={`${classes.taskContainer}`}>
        {tasks &&
          tasks.map((task, index) => (
            <TaskRow key={index} onClickDelete={handleClickDelete()}>
              {task.text}
            </TaskRow>
          ))}
        {tasks.id}
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

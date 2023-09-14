import React from "react";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import "../App.css";
import Table from "../components/Table/Table";
import MainTitle from "../components/Text/MainTitle";
import Modal from "../components/Modal/Modal";

const Page = () => {
  return (
    <div className="container">
      <MainTitle MainTitle="Task Management System" />
      <Button buttonText="+ Add Task" />
      <div className="table-container">
        <Table taskText="Task management task-1" />
      </div>
      <Modal
        info="Create the task please"
        placeholder="Task name"
        modalBtnText="+ Create"
      />
    </div>
  );
};

export default Page;

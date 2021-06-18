import React from "react";
import { useState } from "react";
import "./addTask.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addData } from "../../actions/taskAction";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const userId = localStorage.getItem("user");
  const dispatch = useDispatch();

  const handleTitle = (titleValue) => {
    setTitle(titleValue);
  };

  const handleDescription = (descriptionValue) => {
    setDescription(descriptionValue);
  };

  const handleTaskSubmit = () => {
    setDescription("");
    setTitle("");
    const taskDetail = {
      title,
      description,
      status: "pending",
      user: userId,
    };
    dispatch(addData(taskDetail));
  };

  return (
    <div className="all-task-wrapper">
      <div className="all-task-header">Add Task</div>
      <div className="login-main">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={(e) => handleTitle(e.target.value)}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={description}
          onChange={(e) => handleDescription(e.target.value)}
        />
        <div className="add-task-button-wrapper">
          <button className="add-task-button" onClick={handleTaskSubmit}>
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTask;

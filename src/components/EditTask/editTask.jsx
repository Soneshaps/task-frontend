import React, { useEffect, useState } from "react";
import "./editTask.css";
import { useDispatch, useSelector } from "react-redux";
import { showEdit, cancelEdit } from "../../actions/editAction";
import { headerWithAuth } from "../../utils/localStorage";
import { loadData } from "../../actions/userActions";
import axios from "axios";
import { editData } from "../../actions/editAction";
const EditTask = () => {
  useEffect(() => {
    setTitle(task?.title);
    setDescription(task?.description);
  }, []);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const editId = useSelector((state) => state.editTask.id) || 0;
  const editIndex = useSelector((state) => state.editTask.index) || 0;

  const task = useSelector((state) => {
    return state?.userTasks?.tasks[editIndex];
  });

  const handleTitle = (titleValue) => {
    setTitle(titleValue);
  };

  const handleDescription = (descriptionValue) => {
    setDescription(descriptionValue);
  };

  const handleTaskUpdate = async () => {
    const id = editId;
    const taskDetail = {
      title,
      description,
      status: "pending",
    };
    dispatch(editData(taskDetail, id));
    dispatch(loadData());
    dispatch(cancelEdit());
  };

  const handelCancelTask = () => {
    dispatch(cancelEdit());
  };
  return (
    <div className="edit-task-wrapper">
      <div className="edit-task-main">
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
            <button className="add-task-button" onClick={handleTaskUpdate}>
              UPDATE
            </button>
            <button className="add-task-button" onClick={handelCancelTask}>
              CANCEL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTask;

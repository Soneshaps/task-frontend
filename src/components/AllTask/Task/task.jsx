import React from "react";
import { useState } from "react";
import "./task.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteData } from "../../../actions/taskAction";
import { showEdit } from "../../../actions/editAction";
import { useEffect } from "react";
import { editstatus } from "../../../actions/editAction";
import { loadData } from "../../../actions/userActions";
import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBin4Line } from "react-icons/ri";

const Task = (props) => {
  useEffect(() => {}, []);
  const [status, setStatus] = useState(props.task?.status);
  const dispatch = useDispatch();
  const deleteTaskHandler = (id) => {
    dispatch(deleteData(id));
  };
  const editTaskHandler = () => {
    dispatch(
      showEdit({ isEdit: true, editId: props.task?.id, index: props?.index })
    );
  };

  const checkBoxHandler = (e) => {
    let value;
    if (props.task?.status === "pending") {
      value = "completed";
    } else {
      value = "pending";
    }
    const data = {
      description: props.task?.description,
      title: props.task?.title,
      status: value,
    };
    dispatch(editstatus(data, props.task?.id));
    dispatch(loadData());
  };
  console.log(props);
  return (
    <div className="all-task-list-wrapper">
      <div className="all-task-list-header">
        <div className="all-task-list-title-items">
          <input
            type="checkbox"
            checked={props.task?.status === "pending" ? false : true}
            onChange={(e) => checkBoxHandler(e.target.checked)}
          />
          <div
            className={`all-task-list-title ${
              props.task?.status === "completed" ? "completed" : ""
            }`}
          >
            {props.task?.title}
          </div>
        </div>
        <div className="all-task-list-option">
          {props.task?.status === "pending" ? (
            <button
              disabled
              className="task-edit-button"
              onClick={() => {
                editTaskHandler();
              }}
            >
              <FiEdit2 />
            </button>
          ) : (
            ""
          )}
          <button
            className="task-delete-button"
            onClick={() => deleteTaskHandler(props.task?.id)}
          >
            <RiDeleteBin4Line />
          </button>
        </div>
      </div>
      <div
        className={`all-task-list-description ${
          props.task?.status === "completed" ? "completed" : ""
        }`}
      >
        {props.task?.description}
      </div>
    </div>
  );
};

export default Task;

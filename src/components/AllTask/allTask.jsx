import React, { useEffect } from "react";
import Task from "./Task/task";
import { useSelector, useDispatch } from "react-redux";
import { loadData } from "../../actions/userActions";
import Title from "../Title/title";
import "./allTask.css";
const AllTask = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadData());
  }, []);
  const task = useSelector((state) => state.userTasks.tasks);
  const title = "Tasks";
  return (
    <div className="all-task-wrapper">
      <Title title={title} />
      <div className="task-main">
        {task?.map((data, index) => {
          return <Task key={data.id} index={index} task={data} />;
        })}
      </div>
    </div>
  );
};

export default AllTask;

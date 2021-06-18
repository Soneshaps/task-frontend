import React from "react";
import { Switch, Route } from "react-router-dom";
import AllTask from "../AllTask/allTask";
import DashboardContent from "../Dashboard/dashboardContent";
import AddTask from "../AddTask/addTask";
import EditTask from "../EditTask/editTask";
import { useSelector } from "react-redux";
import "./content.css";
const Content = () => {
  const showEdit = useSelector((state) => state.editTask.isEdit);

  return (
    <div className="content-wrapper">
      {showEdit ? <EditTask /> : ""}

      <div className="content-main">
        <Switch>
          <Route exact path="/dashboard/" component={DashboardContent} />
          <Route path="/dashboard/all" component={AllTask} />
          <Route path="/dashboard/add" component={AddTask} />
        </Switch>
      </div>
    </div>
  );
};

export default Content;

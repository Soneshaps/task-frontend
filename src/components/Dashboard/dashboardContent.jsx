import React from "react";
import Title from "../Title/title";
import { useSelector } from "react-redux";
const DashboardContent = () => {
  const title = "Dashboard";
  const username = useSelector((state) => state.userAuth.username);
  return (
    <div>
      <div className="container">
        <Title title={title} />
        <div className="dashboard-main">
          <div className="dashboard-greeting">
            <div>Hello ,</div>
            <div className="dashboard-username">{username}</div>
          </div>
          <div className="dashboard-task">
            {/* <div className="dash-board-total-task">Total Tasks</div>
            <div className="dashboard-total-task-number">10</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;

import React from "react";
import { Redirect } from "react-router-dom";

const Dashboard = () => {
  const logout = () => {
    window.localStorage.removeItem("token");
    window.location.reload(true);
  };
  if (window.localStorage.getItem("token") === null) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      Dashboard
      <button onClick={logout}>LOGOUT</button>
    </div>
  );
};

export default Dashboard;

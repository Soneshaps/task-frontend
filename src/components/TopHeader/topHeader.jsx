import React from "react";
import Logout from "../Logout/logout";
import "./topHeader.css";
import { Link } from "react-router-dom";
import { AiFillWindows } from "react-icons/ai";
const TopHeader = () => {
  return (
    <div className="top-header">
      <Link to="/dashboard">
        <div className="top-header-link">
          <AiFillWindows />
          Dashboard
        </div>
      </Link>
      <Logout />
    </div>
  );
};

export default TopHeader;

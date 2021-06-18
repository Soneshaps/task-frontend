import React from "react";
import { Link } from "react-router-dom";
import "./leftNav.css";
import { FaBookOpen } from "react-icons/fa";
import { MdAdd } from "react-icons/md";
const LeftNav = () => {
  return (
    <div className="left-nav">
      <Link to="/dashboard/all">
        <div className="left-nav-items">
          <div className="nav-icon icon-book">
            <FaBookOpen />
          </div>
          Tasks
        </div>
      </Link>
      <Link to="/dashboard/add">
        <div className="left-nav-items">
          <div className="nav-icon icon-add">
            <MdAdd />
          </div>
          Add
        </div>
      </Link>
    </div>
  );
};

export default LeftNav;

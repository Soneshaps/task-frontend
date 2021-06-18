import React from "react";
import TopHeader from "../TopHeader/topHeader";
import LeftNav from "../LeftNav/leftNav";
import { loadData } from "../../actions/userActions";
import { useDispatch } from "react-redux";
import Content from "../Content/content";
import "./dashboard.css";
import { useEffect } from "react";
const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadData());
  }, []);

  return (
    <div>
      <TopHeader />
      <div className="dashoboard-bottom-section">
        <LeftNav />
        <Content />
      </div>
    </div>
  );
};

export default Dashboard;

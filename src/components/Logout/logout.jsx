import React from "react";
import { Redirect } from "react-router-dom";
import "./logout.css";
import { BiLogOut } from "react-icons/bi";
import { setAuth } from "../../actions/authAction";
import { useDispatch, useSelector } from "react-redux";
const Logout = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.userAuth.isLogged);
  const logout = () => {
    dispatch(setAuth(false));

    window.localStorage.removeItem("token");
    window.location.reload(true);
  };
  if (window.localStorage.getItem("token") === null && auth === false) {
    return <Redirect to="/" />;
  }
  return (
    <div className="logout">
      <button className="logout-button" onClick={logout}>
        <BiLogOut />
      </button>
    </div>
  );
};

export default Logout;

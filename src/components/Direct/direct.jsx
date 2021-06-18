import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const Direct = () => {
  const auth = useSelector((state) => state.userAuth.isLogged);

  const verify = () => {
    if (window.localStorage.getItem("token") && auth === true) {
      return <Redirect to="/dashboard" />;
    } else {
      return <Redirect to="/login" />;
    }
  };
  return <div>{verify()}</div>;
};

export default Direct;

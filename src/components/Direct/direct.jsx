import React from "react";
import { Redirect } from "react-router-dom";

const Direct = () => {
  const verify = () => {
    if (window.localStorage.getItem("token")) {
      return;
    } else {
      return <Redirect to="/login" />;
    }
  };
  return <div>{verify()}</div>;
};

export default Direct;

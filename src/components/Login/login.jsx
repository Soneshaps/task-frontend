import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import "./login.css";
import { userAuth } from "../../actions/authAction";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const routerHistory = useHistory();
  const handleEmail = (emailValue) => {
    setEmail(emailValue);
  };

  const handlePassword = (passwordValue) => {
    setPassword(passwordValue);
  };

  const handleLogin = async () => {
    const userData = {
      email,
      password,
    };

    await dispatch(userAuth(userData));
    routerHistory.push("/dashboard");
  };

  const direct = () => {
    if (window.localStorage.getItem("token")) {
      return <Redirect to="/dashboard" />;
    }
  };
  if (window.localStorage.getItem("token")) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div className="login-wrapper">
      <div className="login-header">Sign in.</div>
      <div className="login-main">
        <input
          type="text"
          name="username"
          placeholder="Email"
          onChange={(e) => handleEmail(e.target.value)}
        />
        <input
          type="password"
          name="username"
          placeholder="Password"
          onChange={(e) => handlePassword(e.target.value)}
        />
        <button onClick={handleLogin}>LOGIN</button>
        <div className="next-form">
          Don't have an acoount ? <Link to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

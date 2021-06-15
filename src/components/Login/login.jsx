import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";

import "./login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (emailValue) => {
    setEmail(emailValue);
  };

  const handlePassword = (passwordValue) => {
    setPassword(passwordValue);
  };

  const handleLogin = () => {
    console.log(email, password);
    fetch("http://localhost:4000/api/users/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.token) {
          console.log(res);
          window.localStorage.setItem("token", res.token);
          window.location.reload(true);
        } else {
          alert("Wrong password or email ");
        }
      })
      .catch(() => {
        alert("Somethings not right");
      });
  };

  if (window.localStorage.getItem("token")) {
    console.log("here");
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

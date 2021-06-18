import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { hideMessage, showMessage } from "../../actions/messageAction";
import {
  invalidFeildMessage,
  incorrectEmailMessage,
  accountCreatedMessage,
  emailExistMessage,
  errorMessage,
} from "../../utils/messages";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleName = (NameValue) => {
    setName(NameValue);
  };

  const handleEmail = (emailValue) => {
    setEmail(emailValue);
  };

  const handlePassword = (passwordValue) => {
    setPassword(passwordValue);
  };

  const hide = () => {
    setTimeout(function () {
      dispatch(hideMessage());
    }, 2000);
  };

  const validateInput = () => {
    let isEmail = validateEmail(email);
    if (name === "" || email === "" || password === "") {
      dispatch(showMessage(invalidFeildMessage));
      hide();
    } else if (!isEmail) {
      dispatch(showMessage(incorrectEmailMessage));
      hide();
    } else {
      handleRegister();
    }
  };

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleRegister = () => {
    const body = { username: name, email, password };
    axios
      .post("http://localhost:4000/api/users/register", body)
      .then((res) => {
        if (res.data === "User Sucessfully Created") {
          dispatch(showMessage(accountCreatedMessage));
          hide();
        }
        if (res.data === "Email Already Exist") {
          dispatch(showMessage(emailExistMessage));
          hide();
        }
      })
      .catch((err) => {
        dispatch(showMessage(errorMessage));
        hide();
      });
  };

  if (window.localStorage.getItem("token")) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div className="wrapper">
      <div className="login-wrapper">
        {/* {alert ? <div className={`message ${color}`}>{message}</div> : ""} */}
        <div className="login-header">Sign up.</div>

        <div className="login-main">
          <form id="registerForm">
            <input
              className="register-input"
              type="text"
              name="name"
              placeholder="Username"
              onChange={(e) => handleName(e.target.value)}
            />
            <input
              className="register-input"
              type="text"
              name="email"
              placeholder="Email Address"
              onChange={(e) => handleEmail(e.target.value)}
            />
            <input
              className="register-input"
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => handlePassword(e.target.value)}
            />
          </form>
          <div className="submit-div">
            <button onClick={validateInput}>Register</button>
          </div>
          <div className="next-form">
            Already have an acoount ? <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

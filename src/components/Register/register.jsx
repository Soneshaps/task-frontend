import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";
import MessageBox from "../MessageBox/messageBox";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState(false);
  const [color, setColor] = useState("");

  const handleName = (NameValue) => {
    setName(NameValue);
  };

  const handleEmail = (emailValue) => {
    setEmail(emailValue);
  };

  const handlePassword = (passwordValue) => {
    setPassword(passwordValue);
  };

  const validateInput = () => {
    let isEmail = validateEmail(email);
    if (name === "" || email === "" || password === "") {
      setMessage("Fill all the Feild");
      setAlert(true);
      setColor("color-yellow");
    } else if (!isEmail) {
      setMessage("Email is not correct");
      setAlert(true);
      setColor("color-yellow");
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
        console.log(res);
        setMessage(res.data);
        setAlert(true);
        if (res.data === "User Sucessfully Created") {
          setColor("color-green");
          document.getElementById("registerForm").reset();
        }
        if (res.data === "Email Already Exist") {
          setColor("color-red");
        }
      })
      .catch((err) => console.log(err));
  };

  if (window.localStorage.getItem("token")) {
    console.log("here");
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

import React from "react";
import { Route, Redirect, BrowserRouter as Router } from "react-router-dom";
import Login from "../Login/login";
import Direct from "../Direct/direct";
import Dashboard from "../Dashboard/dashboard";
import Register from "../Register/register";

const Main = () => {
  return (
    <Router>
      <Route exact path="/" component={Direct} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />

      <Route path="/dashboard" component={Dashboard} />
    </Router>
  );
};

export default Main;

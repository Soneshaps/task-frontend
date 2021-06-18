import axios from "axios";
import { showMessage, hideMessage } from "./messageAction";
import { incorrectFeild, loggedInMessage } from "../utils/messages";
export const setAuth = (data) => {
  return { type: "SET_AUTH", payload: data };
};

export const userAuth = (userData) => async (dispatch) => {
  try {
    await axios
      .post("http://localhost:4000/api/users/login", userData, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        window.localStorage.setItem("token", res.data.token);
        window.localStorage.setItem("username", res.data.username);
        window.localStorage.setItem("user", res.data.id);
        dispatch(setAuth({ isLogged: true, username: res.data.username }));
        dispatch(showMessage(loggedInMessage));
      });
    setTimeout(function () {
      dispatch(hideMessage());
    }, 2000);
  } catch (err) {
    dispatch(showMessage(incorrectFeild));
    setTimeout(function () {
      dispatch(hideMessage());
    }, 2000);
  }
};

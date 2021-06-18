import axios from "axios";
import { Redirect } from "react-router";
import { headerWithAuth } from "../utils/localStorage";
import { useHistory } from "react-router";

const setData = (data) => {
  return { type: "SET_TASK", payload: data };
};
//action creator
export const loadData = () => async (dispatch, getState) => {
  const UserData = await axios
    .get("http://localhost:4000/api/todos/", {
      headers: headerWithAuth(),
    })
    .then((res) => {
      return res;
    });
  dispatch(setData(UserData.data));
};

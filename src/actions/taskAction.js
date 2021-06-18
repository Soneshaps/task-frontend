import axios from "axios";
import { headerWithAuth } from "../utils/localStorage";
import { loadData } from "./userActions";
import { cancelEdit } from "./editAction";
import { hideMessage, showMessage } from "./messageAction";
import { addedMessage, errorMessage, deletedMessage } from "../utils/messages";
const addTask = (data) => {
  return { type: "ADD_TASK", payload: data };
};

export const addData = (taskData) => async (dispatch, getState) => {
  try {
    const createData = await axios
      .post("http://localhost:4000/api/todos/", taskData, {
        headers: headerWithAuth(),
      })
      .then((res) => {
        return res;
      });
    dispatch(addTask(createData?.detail?.data));
    dispatch(showMessage(addedMessage));
    setTimeout(function () {
      dispatch(hideMessage());
    }, 1500);
  } catch (err) {
    dispatch(showMessage(errorMessage));
    setTimeout(function () {
      dispatch(hideMessage());
    }, 1500);
  }
};

export const deleteData = (id) => async (dispatch, getState) => {
  try {
    await axios
      .delete(`http://localhost:4000/api/todos/${id}`, {
        headers: headerWithAuth(),
      })
      .then((res) => {
        return res;
      });
    dispatch(loadData());
    dispatch(showMessage(deletedMessage));
    setTimeout(function () {
      dispatch(hideMessage());
    }, 1500);
  } catch (err) {
    dispatch(showMessage(errorMessage));
    setTimeout(function () {
      dispatch(hideMessage());
    }, 1500);
  }
};

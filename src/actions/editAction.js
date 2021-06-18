import axios from "axios";
import { headerWithAuth } from "../utils/localStorage";
import { loadData } from "./userActions";
import {
  taskCompletedMessage,
  errorMessage,
  taskPendingMessage,
  editedMessage,
} from "../utils/messages";
import { showMessage, hideMessage } from "./messageAction";
export const showEdit = (data) => {
  return { type: "EDIT_TASK", payload: data };
};

export const cancelEdit = () => {
  return { type: "CANCEL_TASK" };
};

export const editData = (taskData, id) => async (dispatch, getState) => {
  try {
    await axios
      .put(`http://localhost:4000/api/todos/${id}`, taskData, {
        headers: headerWithAuth(),
      })
      .then((res) => {
        dispatch(showMessage(editedMessage));
        setTimeout(function () {
          dispatch(hideMessage());
        }, 1500);
      });
  } catch (err) {
    dispatch(showMessage(errorMessage));
    setTimeout(function () {
      dispatch(hideMessage());
    }, 1500);
  }
};

export const editstatus = (status, id) => async (dispatch, getState) => {
  try {
    await axios
      .put(`http://localhost:4000/api/todos/${id}`, status, {
        headers: headerWithAuth(),
      })
      .then((res) => {
        if (status?.status === "pending") {
          dispatch(showMessage(taskPendingMessage));
        } else {
          dispatch(showMessage(taskCompletedMessage));
        }
        setTimeout(function () {
          dispatch(hideMessage());
        }, 2000);
      });
  } catch (err) {
    dispatch(showMessage(errorMessage));
    setTimeout(function () {
      dispatch(hideMessage());
    }, 1500);
  }
};

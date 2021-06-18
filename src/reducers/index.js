import { combineReducers } from "redux";
import userReducer from "./userReducer";
import addTaskReducer from "./addTaskReducer";
import editReducer from "./editReducer";
import messageReducer from "./messageReducer";
import authReducer from "./authReducer";
const reducer = combineReducers({
  userAuth: authReducer,
  editTask: editReducer,
  userTasks: userReducer,
  addTaskDetails: addTaskReducer,
  message: messageReducer,
});

export default reducer;

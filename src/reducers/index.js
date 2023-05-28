import { combineReducers } from "redux";
import todoReducer from "../todos/reducers/todoReducer";

export default combineReducers({
  todoSlice: todoReducer,
});

import { combineReducers } from "redux";
import todoReducer from "../todos/reducers/todoReducer";
import expansesReducer from "../expanse-tracker/reducer/expansesReducer";

export default combineReducers({
  todoSlice: todoReducer,
  expansesSlice: expansesReducer,
});

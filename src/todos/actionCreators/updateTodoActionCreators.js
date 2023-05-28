import {
  UPDATE_TODO_REQUESTED,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_ERROR,
} from "../actions";
import { updateTodosApi } from "../services/todo.service";

const updateTodoRequested = () => ({
  type: UPDATE_TODO_REQUESTED,
});

const updateTodoError = () => ({
  type: UPDATE_TODO_ERROR,
});

const updateTodoSuccess = () => ({
  type: UPDATE_TODO_SUCCESS,
});

export const updateTodo = (id, data) => {
  return function (dispatch) {
    dispatch(updateTodoRequested());
    return updateTodosApi(id, data)
      .then((res) => {
        dispatch(updateTodoSuccess);
      })
      .catch((e) => {
        dispatch(updateTodoError());
      });
  };
};

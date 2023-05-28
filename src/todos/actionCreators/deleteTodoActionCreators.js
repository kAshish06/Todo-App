import { deleteTodoApi } from "../services/todo.service";

import {
  DELETE_TODO_REQUESTED,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_ERROR,
} from "../actions";

const deleteTodoRequested = () => ({
  type: DELETE_TODO_REQUESTED,
});

const deleteTodoError = () => ({
  type: DELETE_TODO_ERROR,
});

const deleteTodoSuccess = () => ({
  type: DELETE_TODO_SUCCESS,
});

export const deleteTodo = (todoId) => {
  return function (dispatch) {
    dispatch(deleteTodoRequested());
    return deleteTodoApi(todoId)
      .then((res) => {
        dispatch(deleteTodoSuccess());
      })
      .catch((e) => {
        dispatch(deleteTodoError());
      });
  };
};

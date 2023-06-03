import { addTodosApi } from "../services/todo.service";
import {
  ADD_TODO_REQUESTED,
  ADD_TODO_SUCCESS,
  ADD_TODO_ERROR,
} from "../actions";

const addTodoRequested = () => ({
  type: ADD_TODO_REQUESTED,
});

const addTodoError = () => ({
  type: ADD_TODO_ERROR,
});

const addTodoSuccess = () => ({
  type: ADD_TODO_SUCCESS,
});

export const addTodo = (todo) => {
  return function (dispatch) {
    dispatch(addTodoRequested());
    return addTodosApi(todo)
      .then((res) => {
        dispatch(addTodoSuccess());
      })
      .catch((e) => {
        dispatch(addTodoError());
      });
  };
};

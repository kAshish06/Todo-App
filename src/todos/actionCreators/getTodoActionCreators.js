import { getTodosApi } from "../services/todo.service";

import {
  FETCH_TODOS_REQUESTED,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_ERROR,
} from "../actions";

const getTodosRequested = () => ({
  type: FETCH_TODOS_REQUESTED,
});

const getTodosError = () => ({
  type: FETCH_TODOS_ERROR,
});

const getTodosSuccess = (todos) => ({
  type: FETCH_TODOS_SUCCESS,
  payload: todos,
});

export const getTodos = () => {
  return function (dispatch) {
    dispatch(getTodosRequested());
    return getTodosApi()
      .then((res) => {
        dispatch(getTodosSuccess(res));
      })
      .catch((e) => {
        dispatch(getTodosError());
      });
  };
};

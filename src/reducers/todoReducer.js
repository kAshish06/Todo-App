import {
  FETCH_TODOS_REQUESTED,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_ERROR,
  ADD_TODO_REQUESTED,
  ADD_TODO_SUCCESS,
  ADD_TODO_ERROR,
} from "../actions";

const initialState = {
  isAddTodoInProgress: false,
  isTodosLoading: false,
  todos: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TODOS_REQUESTED: {
      return {
        ...state,
        isTodosLoading: true,
      };
    }
    case FETCH_TODOS_SUCCESS: {
      return {
        ...state,
        todos: action.payload.todos,
        isTodosLoading: false,
      };
    }
    case FETCH_TODOS_ERROR: {
      return {
        ...state,
        isTodosLoading: false,
      };
    }
    case ADD_TODO_REQUESTED: {
      return {
        ...state,
        isAddTodoInProgress: true,
      };
    }
    case ADD_TODO_SUCCESS:
    case ADD_TODO_ERROR: {
      return {
        ...state,
        isAddTodoInProgress: false,
      };
    }
    default:
      return state;
  }
}

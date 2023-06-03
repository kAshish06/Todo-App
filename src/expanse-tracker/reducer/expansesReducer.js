import {
  ADD_EXPANSE_REQUESTED,
  ADD_EXPANSE_SUCCESS,
  ADD_EXPANSE_ERROR,
  GET_EXPANSE_REQUESTED,
  GET_EXPANSE_SUCCESS,
  GET_EXPANSE_ERROR,
} from "../action";

const initialState = {
  addExpanseRequested: false,
  getExpanseRequested: false,
  expanses: [],
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_EXPANSE_REQUESTED: {
      return {
        ...state,
        addExpanseRequested: true,
      };
    }
    case ADD_EXPANSE_SUCCESS:
    case ADD_EXPANSE_ERROR: {
      return {
        ...state,
        addExpanseRequested: false,
      };
    }
    case GET_EXPANSE_REQUESTED: {
      return {
        ...state,
        getExpanseRequested: true,
      };
    }
    case GET_EXPANSE_SUCCESS: {
      return {
        ...state,
        expanses: action.payload,
        getExpanseRequested: false,
      };
    }
    case GET_EXPANSE_ERROR: {
      return {
        ...state,
        getExpanseRequested: false,
      };
    }
    default: {
      return { ...state };
    }
  }
}

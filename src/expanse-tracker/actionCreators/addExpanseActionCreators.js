import {
  ADD_EXPANSE_REQUESTED,
  ADD_EXPANSE_SUCCESS,
  ADD_EXPANSE_ERROR,
} from "../action";
import { addExpanseApi } from "../services/expanses.service";

const addExpanseRequested = () => ({
  type: ADD_EXPANSE_REQUESTED,
});
const addExpanseSuccess = () => ({
  type: ADD_EXPANSE_SUCCESS,
});
const addExpanseError = () => ({
  type: ADD_EXPANSE_ERROR,
});

export const AddExpanse = (expanse) => {
  return (dispatch) => {
    dispatch(addExpanseRequested());
    return addExpanseApi(expanse)
      .then((res) => {
        dispatch(addExpanseSuccess());
      })
      .catch((e) => {
        dispatch(addExpanseError());
      });
  };
};

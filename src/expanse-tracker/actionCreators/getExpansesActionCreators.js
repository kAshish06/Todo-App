import {
  GET_EXPANSE_REQUESTED,
  GET_EXPANSE_SUCCESS,
  GET_EXPANSE_ERROR,
} from "../action";
import { getExpansesApi } from "../services/expanses.service";

const getExpansesRequested = () => ({
  type: GET_EXPANSE_REQUESTED,
});
const getExpansesSuccess = (expanses) => ({
  type: GET_EXPANSE_SUCCESS,
  payload: expanses,
});
const getExpansesError = () => ({
  type: GET_EXPANSE_ERROR,
});

export const getExpanses = () => {
  return (dispatch) => {
    dispatch(getExpansesRequested());
    return getExpansesApi()
      .then((res) => {
        dispatch(getExpansesSuccess(res.expanses));
      })
      .catch((e) => {
        dispatch(getExpansesError());
      });
  };
};

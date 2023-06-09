import {
  fetchGet,
  fetchPost,
  fetchPatch,
  fetchDelete,
} from "../../utilities/fetch";

const api = "/api/v1/categories";

export function getCategoriesApi() {
  return fetchGet(api);
}

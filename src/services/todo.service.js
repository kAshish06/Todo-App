import {
  fetchGet,
  fetchPost,
  fetchPatch,
  fetchDelete,
} from "../utilities/fetch";

const api = "/api/v1/todos";

export function getTodosApi() {
  return fetchGet(api);
}

export function addTodosApi(data) {
  return fetchPost(api, data);
}

export function deleteTodoApi(id) {
  return fetchDelete(`${api}/${id}`);
}

export function updateTodosApi(id, data) {
  return fetchPatch(api, { id, data });
}

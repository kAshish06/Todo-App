import { fetchGet, fetchPost } from "../utilities/fetch";

export function getTodos() {
  let api = "/api/v1/todos";
  return fetchGet(api);
}

export function addTodos(data) {
  let api = "/api/v1/todos";
  return fetchPost(api, data);
}

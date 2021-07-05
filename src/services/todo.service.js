import { fetchGet, fetchPost, fetchDelete } from "../utilities/fetch";

const api = "/api/v1/todos";

export function getTodos() {
  return fetchGet(api);
}

export function addTodos(data) {
  return fetchPost(api, data);
}

export function deleteTodo(id) {
  return fetchDelete(`${api}/${id}`);
}

import {
  fetchGet,
  fetchPost,
  fetchPatch,
  fetchDelete,
} from "../../utilities/fetch";

const api = "/api/v1/expanses";

export function getExpansesApi() {
  return fetchGet(api);
}

export function addExpanseApi(data) {
  return fetchPost(api, data);
}

export function deleteExpanseApi(id) {
  return fetchDelete(`${api}/${id}`);
}

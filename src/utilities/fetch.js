const HOST_URL = "http://localhost:5000";
const headers = {
  "Content-Type": "application/json",
};

export function fetchGet(url) {
  let getUrl = HOST_URL + url;
  return fetch(getUrl, { method: "GET", headers }).then((res) => res.json());
}

export function fetchPost(url, data) {
  let postUrl = HOST_URL + url;
  return fetch(postUrl, {
    method: "POST",
    headers,
    body: JSON.stringify(data),
  }).then((res) => res.json());
}

export function fetchDelete(url) {
  let deleteUrl = HOST_URL + url;
  return fetch(deleteUrl, {
    method: "DELETE",
    headers,
  }).then((res) => res.json());
}

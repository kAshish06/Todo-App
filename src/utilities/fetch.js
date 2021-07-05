const HOST_URL = "http://localhost:5000";

export function fetchGet(url) {
  let getUrl = HOST_URL + url;
  return fetch(getUrl).then((res) => res.json());
}

export function fetchPost(url, data) {
  let postUrl = HOST_URL + url;
  return fetch(postUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
}

function getTestData() {
  return fetch("http://localhost:5000/api/v1/test").then((response) =>
    response.json()
  );
}

export default getTestData;

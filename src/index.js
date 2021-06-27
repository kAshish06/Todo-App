import React from "react";
import { render } from "react-dom";

import testService from "./services/test.service";

const App = () => {
  testService().then((res) => {
    console.log(res);
  });
  return <div>To do App</div>;
};

render(<App />, document.getElementById("root"));

import React from "react";
import { render } from "react-dom";

import TodoAppWrapper from "./app";
// import css from "./styles/style.css";
import "./styles/index.scss";
const App = () => {
  return <TodoAppWrapper />;
};

render(<App />, document.getElementById("root"));

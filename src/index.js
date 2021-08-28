import React from "react";
import { render } from "react-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { Provider } from "react-redux";

import store from "./store";
import theme from "./theme";
import TodoAppWrapper from "./app";
// import css from "./styles/style.css";
import "./styles/index.scss";
const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <TodoAppWrapper />;
      </ThemeProvider>
    </Provider>
  );
};

render(<App />, document.getElementById("root"));

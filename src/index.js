import React from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import store from "./store";
import theme from "./theme";
import TitleBar from "./titleBar/TitleBar";
import AppRoutes from "./routes/routes";

import "./styles/index.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <TitleBar />
          <AppRoutes />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
};

const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(<App />);

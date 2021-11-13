import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./index.css";
import App from "./app/App";
import axios from "axios";
import { store } from "./app/store";
import { BASE_API_URL } from "./common/constants";

axios.defaults.baseURL = BASE_API_URL;

ReactDOM.render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>,
  document.getElementById("root")
);

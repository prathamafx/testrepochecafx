import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import "./index.scss";
import store from "./redux/store";
import reportWebVitals from "./reportWebVitals";
const rootEl: HTMLElement | null = document.getElementById("root");
render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    ,
  </Provider>,
  rootEl
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
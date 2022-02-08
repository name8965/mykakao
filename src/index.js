import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
// import reportWebVitals from "./reportWebVitals";

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
//사용하지 않는 문구
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

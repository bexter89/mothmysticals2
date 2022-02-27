import React from "react";
import ReactDOM from "react-dom";
import Popper from "@popperjs/core";
import "bootstrap-icons/font/bootstrap-icons.css";
import App from "../src/App";
import PaloSanto from "./assets/fonts/PaloSanto.ttf";
import Displace from "./assets/fonts/Displace.ttf";
import revicons from './assets/fonts/revicons.ttf'
import "../src/styles.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

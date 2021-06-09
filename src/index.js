import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";

/**
 * declaring baseURL 
 */

axios.defaults.baseURL = "http://163.47.115.230:30000/";

ReactDOM.render(
  /**
   * assigning browserRouter for router 
   */
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

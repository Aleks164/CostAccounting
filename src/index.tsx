import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import "./index.css";

ReactDOM.render(
  <App isLokiTest={false} sleepMs={0} />,
  document.getElementById("root")
);

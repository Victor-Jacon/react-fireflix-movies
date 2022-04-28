import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.styles";
import { ReactRoutes } from "./routes";

if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  worker.start();
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ReactRoutes />
  </React.StrictMode>
);

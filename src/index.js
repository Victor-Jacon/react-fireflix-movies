import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.styles";
import { ReactRoutes } from "./routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ReactRoutes />
  </React.StrictMode>
);

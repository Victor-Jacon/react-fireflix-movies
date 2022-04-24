import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppReal } from "./pages/AppReal";
import { AprendendoReactPodeApagar } from "./pages/AprendendoReactPodeApagar";
import "./styles/index.css";
import { Home } from "./pages/Home";

export const ReactRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/aprendendo-react"
          element={<AprendendoReactPodeApagar />}
        />

        <Route path="/app-real" element={<AppReal />} />
      </Routes>
    </BrowserRouter>
  );
};

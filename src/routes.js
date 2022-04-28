import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppReal } from "./pages/AppReal";
import { AprendendoReactPodeApagar } from "./pages/AprendendoReactPodeApagar";
import "./styles/index.css";
import { Home } from "./pages/Home";
import { FireflixProvider } from "./context/app";

export const ReactRoutes = () => {
  return (
    // CONTEXT API 8 - Passo as variáveis do contexto para todas as rotas.
    <FireflixProvider>
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
    </FireflixProvider>
  );
};

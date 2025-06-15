import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router";

import { Home } from "./dashboard/home.tsx";
import Dashboard from "./dashboard/dashboard.tsx";
import { Layout } from "./pokeman/layout.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="dashboard" element={<Dashboard></Dashboard>}>
          <Route index element={<Home />} />
        </Route>
        <Route path="layout" element={<Layout />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

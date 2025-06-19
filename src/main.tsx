import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router";

import { Home } from "./dashboard/home.tsx";
import Dashboard from "./dashboard/dashboard.tsx";
import { Layout } from "./pokeman/layout.tsx";
import { AuthLayout } from "./authentication/authlayout.tsx";
import { LogIn } from "./authentication/login.tsx";
import { Register } from "./authentication/register.tsx";
import { AuthProvider } from "./authentication/authcontext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<LogIn />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<LogIn />} />
          </Route>
          <Route path="/" element={<App />} />
          <Route path="dashboard" element={<Dashboard></Dashboard>}>
            <Route index element={<Home />} />
          </Route>
          <Route path="layout" element={<Layout />}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);

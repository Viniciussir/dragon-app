import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/register/RegisterPage";
import HomePage from "./pages/home/HomePage";
import PrivateRoute from "./components/PrivateRoute";
import DragonsPage from "./pages/DragonsPage/DragonsPage";

const AppRouter = ({ isAuthenticated, handleLoginSuccess }) => {
  return (
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/login"
        element={<LoginPage onLoginSuccess={handleLoginSuccess} />}
      />
      <Route
        path="/home"
        element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <HomePage />
          </PrivateRoute>
        }
      />
      <Route
        path="/dragons"
        element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <DragonsPage />
          </PrivateRoute>
        }
      />
      <Route path="/" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default AppRouter;

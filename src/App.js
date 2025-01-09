import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./AppRouter";
import Alert from "./components/alert/Alert";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [alert, setAlert] = useState(null);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    showAlert("Login realizado com sucesso!", "success");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    showAlert("Você saiu da conta.", "info");
  };

  const showAlert = (message, type = "info") => {
    setAlert({ message, type });
  };

  const handleCloseAlert = () => {
    setAlert(null);
  };

  return (
    <Router>
      <AppRouter
        isAuthenticated={isAuthenticated}
        handleLoginSuccess={handleLoginSuccess}
        handleLogout={handleLogout}
        showAlert={showAlert}
      />
      {alert && (
        <Alert
          message={alert.message}
          type={alert.type}
          onClose={handleCloseAlert}
        />
      )}
    </Router>
  );
};

export default App;

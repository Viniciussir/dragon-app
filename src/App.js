import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./AppRouter";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <AppRouter
        isAuthenticated={isAuthenticated}
        handleLoginSuccess={handleLoginSuccess}
        handleLogout={handleLogout}
      />
    </Router>
  );
};

export default App;

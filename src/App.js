import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./AppRouter";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <AppRouter
        isAuthenticated={isAuthenticated}
        handleLoginSuccess={handleLoginSuccess}
      />
    </Router>
  );
};

export default App;

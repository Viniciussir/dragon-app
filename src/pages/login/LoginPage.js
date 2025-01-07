import React, { useState } from "react";
import "./LoginPage.css";
import LoginForm from "../../components/login/LoginForm.js";
import dragonImage from "../../assets/images/dragon.png";

const LoginPage = () => {
  const [error, setError] = useState("");

  const handleLogin = (username, password) => {
    if (username === "" || password === "") {
      setError("Por favor, preencha todos os campos.");
    } else {
      setError("");
      console.log("Login realizado:", username, password);
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="login-form">
          <LoginForm onSubmit={handleLogin} />
        </div>
        <div className="login-image">
          <img src={dragonImage} alt="Dragon" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

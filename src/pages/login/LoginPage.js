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
    <div className="loginPage-page">
      <div className="loginPage-box">
        <div className="loginPage-content">
          <div className="loginPage-links">
            <button className="loginPage-link active">Entrar</button>
            <button
              className="loginPage-link"
              onClick={() => (window.location.href = "/register")}
            >
              Criar Conta
            </button>
          </div>
          <LoginForm onSubmit={handleLogin} />
          {error && <p className="loginPage-error-message">{error}</p>}
        </div>
        <div className="loginPage-image">
          <img src={dragonImage} alt="Dragon" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

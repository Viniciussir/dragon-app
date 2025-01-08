import React, { useState } from "react";
import "./LoginPage.css";
import LoginForm from "../../components/login/LoginForm.js";
import dragonImage from "../../assets/images/dragon.png";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ onLoginSuccess }) => {
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const handleLoginSuccess = () => {
    onLoginSuccess();
    navigate("/home");
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
          <LoginForm
            onLoginSuccess={handleLoginSuccess}
            error={error}
            setError={setError}
          />
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

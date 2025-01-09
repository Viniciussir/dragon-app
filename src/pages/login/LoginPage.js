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
    <div className="login-page">
      <div className="login-page__box">
        <div className="login-page__content">
          <div className="login-page__links">
            <button className="login-page__link login-page__link--active">
              Entrar
            </button>
            <button
              className="login-page__link"
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
          {error && <p className="login-page__error-message">{error}</p>}
        </div>
        <div className="login-page__image">
          <img src={dragonImage} alt="Dragon" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

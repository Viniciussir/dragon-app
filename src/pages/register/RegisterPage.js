import React, { useState } from "react";
import "./RegisterPage.css";
import dragonImage from "../../assets/images/dragon.png";
import RegisterForm from "../../components/register/RegisterForm.js";

const RegisterPage = () => {
  const [error, setError] = useState("");

  const handleRegister = (username, password) => {
    if (username === "" || password === "") {
      setError("Por favor, preencha todos os campos.");
    } else {
      setError("");
      console.log("register realizado:", username, password);
    }
  };

  return (
    <div className="registerPage-page">
      <div className="registerPage-box">
        <div className="registerPage-image">
          <img src={dragonImage} alt="Dragon" />
        </div>
        <div className="registerPage-content">
          <div className="registerPage-links">
            <button className="registerPage-link active">Criar Conta</button>
            <button
              className="registerPage-link"
              onClick={() => (window.location.href = "/login")}
            >
              Entrar
            </button>
          </div>
          <RegisterForm onSubmit={handleRegister} />
          {error && <p className="registerPage-error-message">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

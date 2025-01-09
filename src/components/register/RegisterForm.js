import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFormValidation from "../../hooks/useFormValidation";
import Alert from "../alert/Alert";
import "./RegisterForm.css";

const RegisterForm = () => {
  const { username, setUsername, password, setPassword, error, handleSubmit } =
    useFormValidation();
  const [alert, setAlert] = useState(null);
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const success = await handleSubmit(e);

    if (success) {
      setAlert({ message: "Cadastro realizado com sucesso!", type: "success" });
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } else {
      setAlert({
        message: "Erro ao cadastrar, tente novamente.",
        type: "error",
      });
    }
  };

  const handleCloseAlert = () => {
    setAlert(null);
  };

  return (
    <div className="register-form">
      {alert && (
        <Alert
          message={alert.message}
          type={alert.type}
          onClose={handleCloseAlert}
        />
      )}
      <form className="register-form__content" onSubmit={handleFormSubmit}>
        <div className="register-form__input-container">
          <label htmlFor="username" className="register-form__label">
            Nome de usuário
          </label>
          <input
            type="text"
            id="username"
            className="register-form__input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="register-form__input-container">
          <label htmlFor="password" className="register-form__label">
            Senha
          </label>
          <input
            type="password"
            id="password"
            className="register-form__input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && <span className="register-form__error-message">{error}</span>}

        <button type="submit" className="register-form__button">
          Criar Conta
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;

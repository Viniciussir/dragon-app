import React from "react";
import useLoginForm from "../../hooks/useLoginForm";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";

const LoginForm = ({ onLoginSuccess }) => {
  const navigate = useNavigate();

  const { username, setUsername, password, setPassword, error, handleSubmit } =
    useLoginForm(() => {
      onLoginSuccess();
      navigate("/home");
    });

  return (
    <div className="login-form">
      <form className="login-form__content" onSubmit={handleSubmit}>
        <div className="login-form__input-container">
          <label htmlFor="username" className="login-form__label">
            Nome de usuário
          </label>
          <input
            type="text"
            id="username"
            className="login-form__input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="login-form__input-container">
          <label htmlFor="password" className="login-form__label">
            Senha
          </label>
          <input
            type="password"
            id="password"
            className="login-form__input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <span className="login-form__error-message">{error}</span>}

        <button type="submit" className="login-form__button">
          Entrar
        </button>
      </form>
    </div>
  );
};

export default LoginForm;

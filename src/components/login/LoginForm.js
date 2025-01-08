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
    <div className="login-container">
      <form className="login-content" onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="username">Nome de usuário</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <span className="register-error-message">{error}</span>}

        <button type="submit" className="submit-btn">
          Entrar
        </button>
      </form>
    </div>
  );
};

export default LoginForm;

import React from "react";
import useLoginForm from "../../hooks/useLoginForm";
import "./LoginForm.css";

const LoginForm = ({ onSubmit }) => {
  const { formState, handleChange, handleSubmit } = useLoginForm(onSubmit);

  return (
    <div className="login-container">
      <form className="login-content" onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="username">Nome de usuário</label>
          <input
            type="text"
            id="username"
            value={formState.username}
            onChange={handleChange("username")}
            placeholder="Digite seu nome de usuário"
          />
        </div>

        <div className="input-container">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            value={formState.password}
            onChange={handleChange("password")}
            placeholder="Digite sua senha"
          />
        </div>

        {formState.error && (
          <span className="error-message">{formState.error}</span>
        )}

        <button type="submit" className="submit-btn">
          Entrar
        </button>
      </form>
    </div>
  );
};

export default LoginForm;

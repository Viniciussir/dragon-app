import React from "react";
import useFormValidation from "../../hooks/useFormValidation";
import "./RegisterForm.css";

const RegisterForm = () => {
  const { username, setUsername, password, setPassword, error, handleSubmit } =
    useFormValidation();

  return (
    <div className="register-container">
      <form className="register-content" onSubmit={handleSubmit}>
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
          Criar Conta
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;

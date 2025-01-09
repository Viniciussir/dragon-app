import React from "react";
import useFormValidation from "../../hooks/useFormValidation";
import "./RegisterForm.css";

const RegisterForm = () => {
  const { username, setUsername, password, setPassword, error, handleSubmit } =
    useFormValidation();

  return (
    <div className="register-form">
      <form className="register-form__content" onSubmit={handleSubmit}>
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

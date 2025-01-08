import React from "react";
import useFormValidation from "../../hooks/useFormValidation";
import validationRules from "../../utils/validationRules";
import "./RegisterForm.css";

const RegisterForm = ({ onSubmit }) => {
  const { values, errors, handleChange, handleValidate } = useFormValidation(
    { username: "", password: "" },
    validationRules
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidate()) {
      onSubmit(values.username, values.password);
    }
  };

  return (
    <div className="register-container">
      <form className="register-content" onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="username">Nome de usuário</label>
          <input
            type="text"
            id="username"
            name="username"
            value={values.username}
            onChange={handleChange}
            placeholder="Digite seu nome de usuário"
          />
          {errors.username && (
            <span className="register-error-message">{errors.username}</span>
          )}
        </div>

        <div className="input-container">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            placeholder="Digite sua senha"
          />
          {errors.password && (
            <span className="register-error-message">{errors.password}</span>
          )}
        </div>

        <button type="submit" className="submit-btn">
          Criar Conta
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;

import { useState } from "react";

const useFormValidation = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validateForm = () => {
    if (username === "" || password === "") {
      setError("Por favor, preencha todos os campos.");
      return false;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some((user) => user.username === username)) {
      setError("Usuário já registrado!");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const newUser = { username, password };

      const users = JSON.parse(localStorage.getItem("users")) || [];

      users.push(newUser);

      localStorage.setItem("users", JSON.stringify(users));

      setUsername("");
      setPassword("");
      setError("");

      return true;
    }
    return false;
  };

  return {
    username,
    setUsername,
    password,
    setPassword,
    error,
    handleSubmit,
  };
};

export default useFormValidation;

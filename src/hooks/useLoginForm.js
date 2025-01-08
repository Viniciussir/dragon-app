import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useLoginForm = (onLoginSuccess) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "" || password === "") {
      setError("Por favor, preencha todos os campos.");
      return false;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (!user) {
      setError("Credenciais inválidas");
      return;
    }
    setError("");
    onLoginSuccess();
    navigate("/home");
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

export default useLoginForm;

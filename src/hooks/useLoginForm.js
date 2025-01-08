import { useState } from "react";
import { validateLoginFields } from "../utils/validation";

const useLoginForm = (onSubmit) => {
  const [formState, setFormState] = useState({
    username: "",
    password: "",
    error: "",
  });

  const handleChange = (field) => (e) => {
    setFormState((prevState) => ({
      ...prevState,
      [field]: e.target.value,
      error: "", // Limpa o erro ao começar a digitar
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = formState;
    const validationError = validateLoginFields(username, password);

    if (validationError) {
      setFormState((prevState) => ({ ...prevState, error: validationError }));
    } else {
      setFormState((prevState) => ({ ...prevState, error: "" }));
      onSubmit(username, password);
    }
  };

  return { formState, handleChange, handleSubmit };
};

export default useLoginForm;

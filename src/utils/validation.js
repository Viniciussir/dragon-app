export const validateLoginFields = (username, password) => {
  if (!username || !password) {
    return "Por favor, preencha todos os campos.";
  }
  return "";
};

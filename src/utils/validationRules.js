const validationRules = (values) => {
  let errors = {};

  if (!values.username) {
    errors.username = "O nome de usuário é obrigatório.";
  }

  if (!values.password) {
    errors.password = "A senha é obrigatória.";
  } else if (values.password.length < 6) {
    errors.password = "A senha deve ter pelo menos 6 caracteres.";
  }

  return errors;
};

export default validationRules;

import { useState } from "react";

const useFormValidation = (initialValues, validate) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleValidate = () => {
    const validationErrors = validate(values);
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  return {
    values,
    errors,
    handleChange,
    handleValidate,
  };
};

export default useFormValidation;

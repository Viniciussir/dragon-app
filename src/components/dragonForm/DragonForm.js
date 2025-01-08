import React, { useState, useEffect } from "react";

const DragonForm = ({ initialValues, onSubmit }) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    if (initialValues) {
      setName(initialValues.name || "");
      setType(initialValues.type || "");
    }
  }, [initialValues]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDragon = {
      id: initialValues?.id || Date.now(),
      name,
      type,
    };
    onSubmit(newDragon);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Tipo:</label>
        <input
          type="text"
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
        />
      </div>
      <button type="submit">
        {initialValues ? "Salvar Alterações" : "Adicionar Dragão"}
      </button>
    </form>
  );
};

export default DragonForm;

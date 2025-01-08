import React from "react";

const DragonListItem = ({ dragon, handleEdit, handleDelete }) => {
  return (
    <li>
      <strong>Nome:</strong> {dragon.name} <br />
      <strong>Tipo:</strong> {dragon.type} <br />
      <strong>Data de Criação:</strong>{" "}
      {new Date(dragon.createdAt).toLocaleDateString()} <br />
      <button onClick={() => handleEdit(dragon)}>Editar</button>
      <button onClick={() => handleDelete(dragon.id)}>Deletar</button>
    </li>
  );
};

export default DragonListItem;

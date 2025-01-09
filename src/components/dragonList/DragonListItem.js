import React from "react";

const DragonListItem = ({ dragon, handleEdit, handleDelete }) => {
  return (
    <li className="dragon-list-item">
      <strong>Nome:</strong> {dragon.name} <br />
      <strong>Tipo:</strong> {dragon.type} <br />
      <strong>Data de Criação:</strong>{" "}
      {new Date(dragon.createdAt).toLocaleDateString()} <br />
      <button className="button-edit" onClick={() => handleEdit(dragon)}>
        Editar
      </button>
      <button className="button-delete" onClick={() => handleDelete(dragon.id)}>
        Deletar
      </button>
    </li>
  );
};

export default DragonListItem;

import React from "react";

const DragonListItem = ({ dragon, handleEdit, handleDelete }) => {
  const normalizeDate = (date) => {
    const isoDate = new Date(date);
    const day = isoDate.getUTCDate().toString().padStart(2, "0");
    const month = (isoDate.getUTCMonth() + 1).toString().padStart(2, "0");
    const year = isoDate.getUTCFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <li className="dragon-list-item">
      <strong>Nome:</strong> {dragon.name} <br />
      <strong>Tipo:</strong> {dragon.type} <br />
      <strong>Data de Criação:</strong> {normalizeDate(dragon.createdAt)} <br />
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

import React, { useState } from "react";
import ConfirmationDialog from "../../confirmationDialog/ConfirmationDialog";
import "./DragonListItem.css";

const DragonListItem = ({ dragon, handleEdit, handleDelete, handleDetail }) => {
  const [showDialog, setShowDialog] = useState(false);

  const normalizeDate = (date) => {
    const isoDate = new Date(date);
    const day = isoDate.getUTCDate().toString().padStart(2, "0");
    const month = (isoDate.getUTCMonth() + 1).toString().padStart(2, "0");
    const year = isoDate.getUTCFullYear();
    return `${day}/${month}/${year}`;
  };

  const confirmDelete = () => {
    handleDelete(dragon.id);
    setShowDialog(false);
  };

  return (
    <li className="dragon-list-item">
      <strong className="dragon-list-item__label">Nome:</strong> {dragon.name}{" "}
      <br />
      <strong className="dragon-list-item__label">Tipo:</strong> {dragon.type}{" "}
      <br />
      <strong className="dragon-list-item__label">Data de Criação:</strong>{" "}
      {normalizeDate(dragon.createdAt)} <br />
      <button
        className="dragon-list-item__button dragon-list-item__button--edit"
        onClick={() => handleEdit(dragon)}
      >
        Alterar
      </button>
      <button
        className="dragon-list-item__button dragon-list-item__button--detail"
        onClick={() => handleDetail(dragon)}
      >
        Detalhar
      </button>
      <button
        className="dragon-list-item__delete-icon"
        onClick={() => setShowDialog(true)}
      >
        &times;
      </button>
      {showDialog && (
        <ConfirmationDialog
          message={`Tem certeza que deseja remover o dragão ${dragon.name} ?`}
          onConfirm={confirmDelete}
          onCancel={() => setShowDialog(false)}
        />
      )}
    </li>
  );
};

export default DragonListItem;

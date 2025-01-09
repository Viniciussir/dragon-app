import React, { useState, useEffect } from "react";
import "./DragonModal.css";

const DragonModal = ({
  dragon,
  closeModal,
  loading,
  saveDragon,
  deleteDragon,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    createdAt: "",
  });

  useEffect(() => {
    if (dragon) {
      const formattedDate = dragon.createdAt
        ? new Date(dragon.createdAt).toISOString().split("T")[0]
        : "";
      setFormData({
        name: dragon.name,
        type: dragon.type,
        createdAt: formattedDate,
      });
    }
  }, [dragon]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await saveDragon(formData, dragon?.id);

    if (success) {
      closeModal();
    } else {
      alert("Erro ao salvar o dragão");
    }
  };

  const handleDelete = async () => {
    if (dragon) {
      const confirmed = window.confirm(
        "Tem certeza que deseja excluir este dragão?"
      );
      if (confirmed) {
        const success = await deleteDragon(dragon.id);
        if (success) {
          closeModal();
        } else {
          alert("Erro ao excluir o dragão");
        }
      }
    }
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-title">
          {dragon ? "Editar Dragão" : "Adicionar Dragão"}
        </h2>
        <form className="modal-form" onSubmit={handleSubmit}>
          <label className="modal-label">
            Nome:
            <input
              className="modal-input"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label className="modal-label">
            Tipo:
            <input
              className="modal-input"
              type="text"
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
            />
          </label>
          <label className="modal-label">
            Data de Criação:
            <input
              className="modal-input"
              type="date"
              name="createdAt"
              value={formData.createdAt}
              onChange={handleChange}
              required
            />
          </label>
          <div className="button-container">
            <button className="modal-button" type="submit" disabled={loading}>
              {dragon ? "Salvar Alterações" : "Adicionar"}
            </button>
            <button className="modal-button" type="button" onClick={closeModal}>
              Fechar
            </button>
            {dragon && (
              <button className="modal-delete-button" onClick={handleDelete}>
                Deletar
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default DragonModal;

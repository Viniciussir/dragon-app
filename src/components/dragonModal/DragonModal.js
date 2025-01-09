import React, { useState, useEffect } from "react";
import "./DragonModal.css";

const DragonModal = ({
  dragon,
  closeModal,
  loading,
  saveDragon,
  deleteDragon,
  viewOnly,
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
    <div className="dragon-modal__overlay" onClick={closeModal}>
      <div
        className="dragon-modal__content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="dragon-modal__close-btn" onClick={closeModal}>
          &times;
        </button>
        <h2 className="dragon-modal__title">
          {dragon ? "Detalhar Dragão" : "Adicionar Dragão"}
        </h2>
        <form className="dragon-modal__form" onSubmit={handleSubmit}>
          <label className="dragon-modal__label">
            Nome:
            <input
              className="dragon-modal__input"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={viewOnly}
            />
          </label>
          <label className="dragon-modal__label">
            Tipo:
            <input
              className="dragon-modal__input"
              type="text"
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
              disabled={viewOnly}
            />
          </label>
          <label className="dragon-modal__label">
            Data de Criação:
            <input
              className="dragon-modal__input"
              type="date"
              name="createdAt"
              value={formData.createdAt}
              onChange={handleChange}
              required
              disabled={viewOnly}
            />
          </label>
          <div className="dragon-modal__button-container">
            {!viewOnly && (
              <button
                className="dragon-modal__button"
                type="submit"
                disabled={loading}
              >
                {dragon ? "Salvar" : "Adicionar"}
              </button>
            )}
            {dragon && !viewOnly && (
              <button
                className="dragon-modal__delete-button"
                onClick={handleDelete}
              >
                Excluir
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default DragonModal;

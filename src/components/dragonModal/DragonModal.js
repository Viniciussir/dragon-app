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
      setFormData({
        name: dragon.name,
        type: dragon.type,
        createdAt: dragon.createdAt,
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
        <h2>{dragon ? "Editar Dragão" : "Adicionar Dragão"}</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Tipo:
            <input
              type="text"
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Data de Criação:
            <input
              type="date"
              name="createdAt"
              value={formData.createdAt}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit" disabled={loading}>
            {dragon ? "Salvar Alterações" : "Adicionar"}
          </button>
        </form>
        {dragon && <button onClick={handleDelete}>Deletar</button>}
        <button onClick={closeModal}>Fechar</button>
      </div>
    </div>
  );
};

export default DragonModal;

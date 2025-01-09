import React, { useState, useEffect } from "react";
import useFetchDragons from "../../hooks/useFetchDragons";
import DragonModal from "../dragonModal/DragonModal";
import DragonListItem from "./DragonListItem";
import "./DragonList.css";

const DragonList = () => {
  const { dragons, fetchDragons, deleteDragon, loading, error, saveDragon } =
    useFetchDragons();
  const [editDragon, setEditDragon] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchDragons();
  }, [fetchDragons]);

  const handleEdit = (dragon) => {
    setEditDragon(dragon);
    setShowModal(true);
  };

  const handleAddNewDragon = () => {
    setEditDragon(null);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Tem certeza que deseja deletar este dragão?"
    );
    if (confirmed) {
      const success = await deleteDragon(id);
      if (success) {
        fetchDragons();
      } else {
        alert("Erro ao deletar o dragão");
      }
    }
  };

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <button className="button-add-dragon" onClick={handleAddNewDragon}>
        Adicionar Dragão
      </button>
      {showModal && (
        <DragonModal
          dragon={editDragon}
          closeModal={() => {
            setShowModal(false);
          }}
          saveDragon={saveDragon}
          deleteDragon={deleteDragon}
        />
      )}
      <ul className="dragon-list">
        {dragons.map((dragon) => (
          <DragonListItem
            key={dragon.id}
            dragon={dragon}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default DragonList;

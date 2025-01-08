import React, { useState, useEffect } from "react";
import useFetchDragons from "../../hooks/useFetchDragons";
import DragonModal from "../dragonModal/DragonModal";
import DragonListItem from "./DragonListItem";

const DragonList = () => {
  const { dragons, fetchDragons, loading, error } = useFetchDragons();
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

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <button onClick={handleAddNewDragon}>Adicionar Dragão</button>
      {showModal && (
        <DragonModal
          dragon={editDragon}
          closeModal={() => setShowModal(false)}
          fetchDragons={fetchDragons}
        />
      )}
      <ul>
        {dragons.map((dragon) => (
          <DragonListItem
            key={dragon.id}
            dragon={dragon}
            handleEdit={handleEdit}
            handleDelete={() => {}}
          />
        ))}
      </ul>
    </div>
  );
};

export default DragonList;

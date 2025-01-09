import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useFetchDragons from "../../hooks/useFetchDragons";
import DragonModal from "../dragonModal/DragonModal";
import DragonListItem from "./dragonListItem/DragonListItem";
import "./DragonList.css";

const DragonList = () => {
  const { dragons, fetchDragons, deleteDragon, loading, error, saveDragon } =
    useFetchDragons();
  const [editDragon, setEditDragon] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [viewOnly, setViewOnly] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetchDragons();
  }, [fetchDragons]);

  const handleEdit = (dragon) => {
    setEditDragon(dragon);
    setViewOnly(false);
    setShowModal(true);
  };

  const handleDetail = (dragon) => {
    setEditDragon(dragon);
    setViewOnly(true);
    setShowModal(true);
  };

  const handleAddNewDragon = () => {
    setEditDragon(null);
    setViewOnly(false);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    const success = await deleteDragon(id);
    if (success) {
      fetchDragons();
    } else {
      alert("Erro ao deletar o dragão");
    }
  };

  const sortedDragons = [...dragons].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <div className="dragon-list__button-container">
        <button
          className="dragon-list__button dragon-list__button--add"
          onClick={handleAddNewDragon}
        >
          Adicionar Dragão
        </button>
        <button
          className="dragon-list__button dragon-list__button--back"
          onClick={() => navigate("/home")}
        >
          Voltar
        </button>
      </div>

      {showModal && (
        <DragonModal
          dragon={editDragon}
          closeModal={() => {
            setShowModal(false);
          }}
          saveDragon={saveDragon}
          deleteDragon={deleteDragon}
          viewOnly={viewOnly}
        />
      )}
      <ul className="dragon-list">
        {sortedDragons.map((dragon) => (
          <DragonListItem
            key={dragon.id}
            dragon={dragon}
            handleEdit={handleEdit}
            handleDetail={handleDetail}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default DragonList;

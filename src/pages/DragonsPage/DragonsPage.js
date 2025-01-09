import React from "react";
import DragonList from "../../components/dragonList/DragonList";
import "./DragonsPage.css";

const DragonsPage = () => {
  return (
    <div className="dragons-page-container">
      <div className="dragons-page-content">
        <h1>Lista de Dragões</h1>
        <DragonList />
      </div>
    </div>
  );
};

export default DragonsPage;

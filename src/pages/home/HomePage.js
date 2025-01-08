import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = ({ handleLogout }) => {
  return (
    <div className="homepage__wrapper">
      <div className="homepage__container">
        <h1 className="homepage__title">Bem-vindo ao Gerenciador de Dragões</h1>
        <nav>
          <ul className="homepage__nav-list">
            <li className="homepage__nav-item">
              <Link
                to="/dragons"
                className="homepage__nav-link homepage__nav-link--hover"
              >
                Ver Lista de Dragões
              </Link>
            </li>
            <li className="homepage__nav-item">
              <div onClick={handleLogout} className="homepage__logoff-link">
                Desconectar
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HomePage;

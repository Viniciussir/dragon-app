import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Bem-vindo ao Gerenciador de Dragões</h1>
      <nav>
        <ul>
          <li>
            <Link to="/dragons">Ver Lista de Dragões</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;

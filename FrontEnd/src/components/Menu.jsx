import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16" color=" rgb(66, 66, 219)">
  <path fill-rule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
  <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
</svg>

        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/Cliente" className="nav-link text-dark ">
                Clientes
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Localidades" className="nav-link text-dark">
                Localidades
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Promocao" className="nav-link text-dark">
                Promoções
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Contato" className="nav-link text-dark">
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

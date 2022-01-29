import React from "react";
import { Link } from "react-router-dom";

export const NavBar = ({ name, pages }) => {
  return (
    <header>
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-primary">
        <div className="container-fluid">
            <Link className="navbar-brand" to="./pages/Home">{name}</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item">
                <Link className="nav-link active" to="./pages/Home">{pages[0].indexName}</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="./pages/Menu">{pages[1].indexName}</Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    </header>
  );
};
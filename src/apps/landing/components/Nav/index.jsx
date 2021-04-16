import React from "react";
import "./styles.css";

const Nav = () => {
  return (
    <div className="nav">
      <nav className="nav__container">
        <a className="nav__item" href="/#">Inicio</a>
        <a className="nav__item" href="/#">Nosotros</a>
        <a className="nav__item" href="/#">Shop</a>
      </nav>
    </div>
  );
};

export default Nav;

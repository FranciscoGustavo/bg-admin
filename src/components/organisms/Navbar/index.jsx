import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
      	LOGO
      </div>  
      <nav className="navbar__nav">
      	<div className="navbar__menu">
	  <label htmlFor="menu">Ventas</label>
	  <input id="menu" type="checkbox" />
	  <div className="navbar__submenu">
	    <Link to="/">Home</Link>
	    <Link to="/products">Productos</Link>
	  </div>	
      </div>
      </nav>
    </div>
  );
}

export default Navbar; 

import React from 'react';
import logo from '../../../assets/img/logo.png';
import './styles.css';

const Header = ({ title }) => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt=""/>
        <h3>bg-admin</h3>
      </div>
      <h1 className="header__title">{title}</h1>  
    </header>
  );
}

export default Header; 

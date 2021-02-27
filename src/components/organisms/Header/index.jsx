import React from 'react';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import './styles.css';

const Header = ({ title }) => {
  return (
    <header className="header">
      <div className="header__left">
        <MenuOutlinedIcon />
        <h1 className="header__title">{title}</h1>  
      </div>
      <div className="header__right">

      </div>
    </header>
  );
}

export default Header; 

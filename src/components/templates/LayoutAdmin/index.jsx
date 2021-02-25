import React from 'react';
import { Header, Navbar } from '../../organisms';
import './styles.css';

const LayoutAdmin = ({ children }) => {
  return (
    <div className="layoutAdmin">
      <Header />
      <Navbar />
      {children}
    </div>
  );
}

export default LayoutAdmin; 

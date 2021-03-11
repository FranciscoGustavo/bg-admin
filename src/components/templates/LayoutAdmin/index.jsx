import React from 'react';
import { Header, Navbar } from '../../organisms';
import './styles.css';

const LayoutAdmin = ({ children, title }) => {
  return (
    <div className="layoutAdmin">
      <Header title={title} />
      <Navbar />
      {children}
    </div>
  );
};

export default LayoutAdmin;

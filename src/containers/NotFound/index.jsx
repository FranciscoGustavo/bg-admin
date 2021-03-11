import React from 'react';
import { LayoutAdmin } from '../../components/templates';
import './styles.css';

const NotFound = () => {
  return (
    <LayoutAdmin title="Error">
      <div>
        <h1>Error 404 pagina no encontrada</h1>
      </div>
    </LayoutAdmin>
  );
};

export default NotFound;

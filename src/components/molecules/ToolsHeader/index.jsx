import React from 'react';
import './styles.css';

const ToolsHeader = ({ onNew, onPrint, onSendEmail }) => {
  return (
    <div className="products__header">
      <button onClick={onNew}>Nuevo</button>
      <button onClick={onPrint}>Imprimir</button>
      <button onClick={onSendEmail}>Enviar por correo</button>
    </div>
  );
}
export default ToolsHeader; 
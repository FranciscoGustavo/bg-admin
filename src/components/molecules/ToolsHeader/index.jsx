import React from 'react';
import './styles.css';

const ToolsHeader = ({ onNew, onPrint, onSendEmail }) => {
  return (
    <div className="toolsHeader">
      <button className="toolsHeader__button" onClick={onNew}>Nuevo</button>
      <button className="toolsHeader__button" onClick={onPrint}>Imprimir</button>
      <button className="toolsHeader__button" onClick={onSendEmail}>Enviar por correo</button>
    </div>
  );
}
export default ToolsHeader; 
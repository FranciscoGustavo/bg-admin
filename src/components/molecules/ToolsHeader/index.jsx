import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const ToolsHeader = ({ onNew, onPrint, onSendEmail }) => (
  <div className="toolsHeader">
    <button type="button" className="toolsHeader__button" onClick={onNew}>
      Nuevo
    </button>
    <button type="button" className="toolsHeader__button" onClick={onPrint}>
      Imprimir
    </button>
    <button type="button" className="toolsHeader__button" onClick={onSendEmail}>
      Enviar por correo
    </button>
  </div>
);

ToolsHeader.propTypes = {
  onNew: PropTypes.func.isRequired,
  onPrint: PropTypes.func.isRequired,
  onSendEmail: PropTypes.func.isRequired,
};

export default ToolsHeader;

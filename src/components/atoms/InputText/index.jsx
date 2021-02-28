import React from 'react';
import './styles.css';

const InputText = ({ type, label, name, value, options = false, onChange, onBlur, error, touched }) => {
  const renderOptions = () => {
    if (options) 
      return options.map((option) => {
        if (option === value) {
          return <option key={option} value={option}>{option}</option>
        }
        return <option key={option} value={option}>{option}</option>
      });
    return null;
  }

  const renderSelect = () => {
    return (
      <select id={name} name={name} onChange={onChange} value={value}>
        {renderOptions()}
      </select>
    );
  }

  return (
    <div className="inputText">
      <label htmlFor={name}>{label}</label>
      <div>
        {
          type === 'select'
          ? renderSelect()
          : <input type={type} id={name} name={name} value={value} onChange={onChange} onBlur={onBlur} />
        }
      </div>
      { error && touched && <p className="inputText__error" >{error}</p> }
    </div>
  );
}

export default InputText; 
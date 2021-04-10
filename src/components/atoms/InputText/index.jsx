import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const InputText = ({
  type,
  label,
  name,
  value,
  options = false,
  onChange,
  onBlur,
  error,
  touched,
}) => {
  const renderOptions = () => {
    if (options) {
      return options.map((option) => {
        if (typeof option === 'object' && option.value === value) {
          return (
            <option key={option.label} value={value}>
              {option.label}
            </option>
          );
        }

        if (typeof option === 'object') {
          return (
            <option key={option.label} value={option.value}>
              {option.label}
            </option>
          );
        }

        if (typeof option === 'string' && option === value) {
          return (
            <option key={option} value={value}>
              {option}
            </option>
          );
        }

        return (
          <option key={option} value={option}>
            {option}
          </option>
        );
      });
    }
    return null;
  };

  const renderSelect = () => (
    <select id={name} name={name} onChange={onChange} value={value}>
      {renderOptions()}
    </select>
  );

  return (
    <div className="inputText">
      <label htmlFor={name}>{label}</label>
      <div>
        {type === 'select' ? (
          renderSelect()
        ) : (
          <input
            type={type}
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          />
        )}
      </div>
      {error && touched && <p className="inputText__error">{error}</p>}
    </div>
  );
};

InputText.defaultProps = {
  type: 'text',
  options: false,
  onBlur: false,
  error: false,
  touched: false,
};

InputText.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  touched: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

export default InputText;

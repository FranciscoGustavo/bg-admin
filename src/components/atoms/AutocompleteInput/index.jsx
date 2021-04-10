import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';
import './styles.css';

const AutocompleteInput = ({
  type,
  label,
  name,
  value,
  onChange,
  onBlur,
  onKeyUp,
  onSearching,
  className,
}) => {
  const [suggestions, setSuggestions] = useState([]);

  const onSuggestionsFetchRequested = async ({ value: suggestionValue }) => {
    if (!suggestionValue) {
      setSuggestions([]);
      return;
    }

    try {
      const findedSugesstions = await onSearching(suggestionValue);
      setSuggestions(findedSugesstions);
    } catch (err) {
      setSuggestions([]);
    }
  };

  const onSuggestionsClearRequested = () => setSuggestions([]);

  const getSuggestionValue = (suggestion) => suggestion;

  const renderSuggestion = (suggestion) => (
    <div>
      <p>{suggestion}</p>
    </div>
  );

  const onSuggestionSelected = (_event, { suggestion, method }) => {
    if (method === 'enter') {
      _event.preventDefault();
    }
    onChange({ target: { name, value: suggestion } });
  };

  const handleKeyUp = (_event) => (_event.keyCode === 13 ? onKeyUp(_event) : null);

  return (
    <div className={`autocomplete ${className}`}>
      {label && (
        <label className="autocomplete__label" htmlFor={name}>
          {label}
        </label>
      )}
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        onSuggestionSelected={onSuggestionSelected}
        inputProps={{
          id: name,
          type,
          name,
          value,
          onChange,
          onBlur,
          onKeyUp: onKeyUp ? handleKeyUp : null,
        }}
      />
    </div>
  );
};
AutocompleteInput.defaultProps = {
  type: 'text',
  label: false,
  onBlur: false,
  onKeyUp: false,
  className: '',
};

AutocompleteInput.propTypes = {
  type: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  onKeyUp: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  onSearching: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default AutocompleteInput;

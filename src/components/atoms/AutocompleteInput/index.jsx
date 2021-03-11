import React, { useState } from 'react';
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

  const onSuggestionsFetchRequested = async ({ value }) => {
    if (!value) {
      setSuggestions([]);
      return;
    }

    try {
      const findedSugesstions = await onSearching(value);
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

  const handleKeyUp = (_event) =>
    _event.keyCode === 13 ? onKeyUp(_event) : null;

  return (
    <div className={`autocomplete ${className ? className : ''}`}>
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
          type: type,
          name: name,
          value: value,
          onChange: onChange,
          onBlur: onBlur,
          onKeyUp: onKeyUp ? handleKeyUp : null,
        }}
      />
    </div>
  );
};

export default AutocompleteInput;

import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';
import './styles.css';

const AutocompleteInput = ({  type, label, name, value, onChange, onBlur, onSearching }) => {
  const [suggestions, setSuggestions] = useState(['Uno', 'Dos', 'Tres']);

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
  }

  const onSuggestionsClearRequested = () => setSuggestions([]);

  const getSuggestionValue = (suggestion) => suggestion;
  
  const renderSuggestion = (suggestion) => (
    <div>
      <p>{suggestion}</p>
    </div>
  );
  
  const onSuggestionSelected = (_event, { suggestion }) => {
    onChange({ target: { name, value: suggestion } })
  }
  
  return (
    <div className="autocomplete">
      { label && <label className="autocomplete__label" htmlFor={name}>{label}</label> }
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
          onBlur: onBlur
        }}
      />
    </div>
  );
}

export default AutocompleteInput; 
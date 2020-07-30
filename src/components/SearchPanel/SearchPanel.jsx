import React from 'react';
import './SearchPanel.css';

const SearchPanel = (props) => {
  const { placeholder, onFiltered } = props;
  const shearchHandler = (event) => {
    const text = event.target.value.toLowerCase().replace(' ', '');
    onFiltered({
      label: text,
    });
  };
  return (
    <input
      type="text"
      className="form-control search-panel"
      placeholder={placeholder || 'Search..'}
      onChange={shearchHandler}
    />
  );
};

export default SearchPanel;

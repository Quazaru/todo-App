import React from 'react';
import './SearchPanel.css';

const SearchPanel = (props) => (
  <input type="text" className="form-control search-panel" placeholder={props.placeholder || 'Search..'} />
);

export default SearchPanel;

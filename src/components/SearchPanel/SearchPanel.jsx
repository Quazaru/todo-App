import React from 'react';
import './SearchPanel.css'

const SearchPanel = (props) => {
  return (
    <input type="text" className="form-control search-panel" placeholder={props.placeholder || 'Search..'}></input>
  )
}

export default SearchPanel;

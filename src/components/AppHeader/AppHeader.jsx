import React from 'react';
import './AppHeader.css';

const AppHeader = () => (
  <div className="main-header">
    <h1>My Todo List</h1>
    <p>
      <span>1</span>
      {' '}
      more to do,
      {' '}
      <span>3</span>
      {' '}
      done
    </p>
  </div>
);

export default AppHeader;

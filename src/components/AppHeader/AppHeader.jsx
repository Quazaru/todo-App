import React from 'react';
import './AppHeader.css';

const AppHeader = (props) => {
  const { done, toDo } = props;
  return (
    <div className="main-header">
      <h1>My Todo List</h1>
      <p>
        <span>{toDo}</span>
        {' '}
        more to do,
        {' '}
        <span>{done}</span>
        {' '}
        done
      </p>
    </div>
  );
};

export default AppHeader;

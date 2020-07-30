import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';

import './TodoList.css';

const TodoList = (props) => {
  const { todos, onDeleted, onToggleDone, onToggleImportant, filter} = props;
  let filtered = todos;
  if (filter.tag) {
    // eslint-disable-next-line
    filtered = filtered.filter((el) => {
      if (filter.tag === 'done') {
        return el.done;
      }
      if (filter.tag === 'active') {
        return !el.done;
      }
      if (filter.tag === 'all') {
        return true;
      }
    });
  }
  if (filter.label) {
    console.log('adsf');
    // eslint-disable-next-line
    filtered = filtered.filter((el) => {
      const text = el.label.toLowerCase().replace(' ', '');
      return text.includes(filter.label);
    });
  }
  const elements = filtered.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item">
        <TodoListItem
          {...itemProps}
          onDeleted={() => onDeleted(id)}
          onToggleDone={() => onToggleDone(id)}
          onToggleImportant={() => onToggleImportant(id)}
        />
      </li>
    );
  });

  return (
    <ul className="list-group todo-list">
      {elements}
    </ul>
  );
};

export default TodoList;

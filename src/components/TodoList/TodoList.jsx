import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem.jsx';

import './TodoList.css';
const TodoList = (props) => {
  const { todos } = props;
  const elements = todos.map( (item) => {
    const {id, ...itemProps} = item
    return (
      <li key={id} className='list-group-item'>
        <TodoListItem 
        { ...itemProps }
        ></TodoListItem>
      </li>
    )
  })

  return (
    <ul className='list-group todo-list'>
      {elements}
    </ul>
  )
}

export default TodoList;
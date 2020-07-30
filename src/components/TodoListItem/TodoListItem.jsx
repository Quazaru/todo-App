import React from 'react';
import './TodoListItem.css';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false,
      important: false,
    };
  }

  render() {
    const {
      label, onDeleted, onToggleImportant, onToggleDone,
      important, done,
    } = this.props;

    const classNames = {
      todoItem: 'todo-list-item ',
      todoItemText: 'todo-list-item-text ',
      importantBtn: 'important-icon ',
      deleteBtn: 'delete-icon',
    };

    if (important) {
      classNames.todoItemText += ' important';
    }
    if (done) {
      classNames.todoItemText += ' done';
    }

    return (
      <span
        className={classNames.todoItem}

      >
        <span
          className={classNames.todoItemText}
          onClick={() => onToggleDone()}
        >
          { label }
        </span>
        <button
          type="button"
          className={classNames.deleteBtn}
          onClick={() => onDeleted()}
        >
          <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-x-octagon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1L1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z" />
            <path fillRule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z" />
            <path fillRule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z" />
          </svg>
        </button>
        <button
          type="button"
          className={classNames.importantBtn}
          onClick={() => onToggleImportant()}
        >
          <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-exclamation-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
            <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
          </svg>
        </button>
      </span>
    );
  }
}

export default TodoListItem;

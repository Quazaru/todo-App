import React from 'react';

import AppHeader from '../AppHeader/AppHeader';
import SearchPanel from '../SearchPanel/SearchPanel';
import TodoList from '../TodoList/TodoList';
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter';
import TodoItemCreator from '../TodoItemCreator/TodoItemCreator';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoData: [
        { label: 'Drink coffee', important: false, id: 1 },
        { label: 'Drink tea', important: false, id: 2 },
        { label: 'Drink tears', important: true, id: 3 },
      ],
    };
  }

  deleteFieldHandler(id) {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const newData = [
        ...(todoData.slice(0, idx)),
        ...(todoData.slice(idx + 1)),
      ];
      return ({ todoData: newData });
    });
  }

  createFieldHandler(labelText) {
    this.setState(({ todoData }) => {
      const newTodo = { label: labelText, important: false, id: todoData.length + 1 };
      const newData = [...todoData, newTodo];
      return ({ todoData: newData });
    });
  }

  render() {
    return (
      <React.StrictMode>
        <AppHeader />
        <SearchPanel />
        <ItemStatusFilter />
        <TodoList
          todos={this.state.todoData}
          onDeleted={(id) => this.deleteFieldHandler(id)}
        />
        <TodoItemCreator
          onCreated={(labelText) => this.createFieldHandler(labelText)}
        />
      </React.StrictMode>
    );
  }
}
export default App;

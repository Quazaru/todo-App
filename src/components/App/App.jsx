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
        this.createTodoItem('Drink coffee'),
        this.createTodoItem('Drink tea'),
        this.createTodoItem('Drink tears'),
      ],
      filter: {}
    };

  }
  maxId = 1;
  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
  }
  toggleTodoItemProp(idx, prop) {
    const { todoData } = this.state;
    const oldItem = todoData[idx];
    const newItem = {...oldItem};
    newItem[prop] = !oldItem[prop]
    const newArray = [
      ...todoData.slice(0,idx),
      newItem,
      ...todoData.slice(idx + 1)
    ]
    return newArray
  }

  deleteFieldHandler = (id) => {
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
      const newTodo = this.createTodoItem(labelText)
      const newData = [...todoData, newTodo];
      return ({ todoData: newData });
    });
  }

  onToggleImportant = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id);
      return {todoData: this.toggleTodoItemProp(idx, 'important')}
      
    })
  }

  onToggleDone = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id);
      return {todoData: this.toggleTodoItemProp(idx, 'done')}
    })
  }

  onFiltered = (criterion) => {
    if (criterion.tag) {
      if(criterion.tag === 'all'){
        this.setState(({filter}) => {
          let newFilter = filter;
          newFilter.tag = false;
          return {filter: newFilter}
        });
      } else {
        this.setState(({filter}) => {
          let newFilter = filter;
          newFilter.tag = criterion.tag;
          return {filter: newFilter}
        });
      }
    } else if (criterion.label) {
      let newFilter = this.state.filter;
      newFilter.label = criterion.label;
      this.setState({filter: newFilter});
    } else if (criterion.label === '') {
      let newFilter = {...this.state.filter};
      newFilter.label = criterion.label;
      this.setState({filter: newFilter});
    }
  }

  render() {
    const { todoData } = this.state;
    const toDoCount = todoData
                      .filter((el) => !el.done).length
    const doneCount = todoData.length - toDoCount;
    return (
      <React.StrictMode>
        <AppHeader toDo={toDoCount} done={doneCount}/>
        <SearchPanel onFiltered={this.onFiltered}/>
        <ItemStatusFilter onFiltered={this.onFiltered}/>
        <TodoList
          todos={todoData}
          onDeleted={this.deleteFieldHandler}
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}
          filter={this.state.filter}
        />
        <TodoItemCreator
          onCreated={(labelText) => this.createFieldHandler(labelText)}
        />
      </React.StrictMode>
    );
  }
}
export default App;

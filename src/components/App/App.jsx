import React from 'react';
import AppHeader from '../AppHeader/AppHeader.jsx';
import SearchPanel from '../SearchPanel/SearchPanel.jsx';
import TodoList from '../TodoList/TodoList.jsx'
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter.jsx';

import './App.css';

const App = () => {
  const todoData = [
    {label: 'Drink coffee', important: false, id: 1},
    {label: 'Drink tea', important: false, id: 2},
    {label: 'Drink tears', important: true, id: 3},
  ]
  return (
    <React.StrictMode>
    <AppHeader></AppHeader>
    <SearchPanel></SearchPanel>
    <ItemStatusFilter></ItemStatusFilter>
    <TodoList todos={todoData}></TodoList>
    </React.StrictMode>
  )
}
export default App;
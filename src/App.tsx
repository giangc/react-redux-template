import React from 'react';
import './App.css';
import AddTodo from './redux/todo/AddTodo'
import TodoList from './redux/todo/TodoList'
import VisibilityFilters from './redux/todo/VisibilityFilters'
import { Counter } from './redux/counter/Counter'


function App() {
  return (
    <div className="App">
      <Counter />
      <AddTodo />
      <VisibilityFilters />
      <TodoList />
    </div >
  );
}

export default App;

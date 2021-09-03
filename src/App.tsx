import React from 'react';
import './App.css';
import AddTodo from './feature/todo/AddTodo'
import TodoList from './feature/todo/TodoList'
import VisibilityFilters from './feature/todo/VisibilityFilters'
import { Counter } from './feature/counter/Counter'


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

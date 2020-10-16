import React from 'react';
import './App.css';
import AddTodo from './features/todo/AddTodo'
import TodoList from './features/todo/TodoList'
import VisibilityFilters from './features/todo/VisibilityFilters'
import { Counter } from './features/counter/Counter'


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

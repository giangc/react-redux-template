import React from 'react';
import './App.css';
import AddTodo from './components/AddTodo'
import Todo, { TodoTypes } from './components/Todo'

function App() {
  const todo: TodoTypes = {
    toggleTodo: (id) => {
      console.log("id: ", id)
    },
    todo: {
      id: 1,
      content: 'hello',
      completed: false
    }
  }
  return (
    <div className="App">
      <AddTodo />
      <ul>
        <Todo
          todo={todo.todo}
          toggleTodo={todo.toggleTodo}
        />
      </ul>
    </div >
  );
}

export default App;

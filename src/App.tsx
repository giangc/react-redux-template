import React, { useState } from 'react';
import './App.css';
import AddTodo from './features/todo/AddTodo'
import TodoList from './features/todo/TodoList'
import VisibilityFilters from './features/todo/VisibilityFilters'

const App = () => {
  const [filterKey, setFilter] = useState('all')

  return (
    <div
      className="App" >
      <section
        style={{
          marginLeft: "40%"
        }}>
        <h1>TODO LIST</h1>
        <AddTodo />
        <VisibilityFilters
          filter={key => {
            setFilter(key)
          }}
        />
        <TodoList
          select={filterKey}
        />

      </section>

    </div>
  );
}

export default App;

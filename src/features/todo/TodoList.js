import React from "react"
import Todo from "./Todo"
import { selectData } from './todoSlice'
import { useSelector } from 'react-redux'

const TodoList = () => {
  const todos = useSelector(selectData)

  return (
    <ul className="todo-list">
      {todos && todos.length
        ? todos.map((todo, index) => {
          return <Todo key={`todo-${todo.id}`} todo={todo} />;
        })
        : "No todos, yay!"}
    </ul>
  )
};

export default TodoList


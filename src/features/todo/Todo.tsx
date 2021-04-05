import React from "react";
import { TodoType } from '../todo/todoSlice'
import { useDispatch } from 'react-redux'
import { doneTodo, removeTodo } from '../todo/todoSlice'
import styles from './Todo.module.css';
export type TodoProps = {
  todo: TodoType,
  typeDone: boolean
}

const Todo: React.FC<TodoProps> = ({ todo, typeDone }) => {
  const dispatch = useDispatch()

  return (
    <li
      className={todo.complete ? styles.itemDone : styles.todoItems}
      onClick={(_) => {
        dispatch(doneTodo(todo.id))
      }}>
      {todo && todo.complete ? "👌" : "👋"}{" "}
      <span>
        {todo.content}
      </span>
      {typeDone && typeDone === true ?
        (<button
          style={{
            marginLeft: "25px",
          }}
          onClick={(_) => {
            dispatch(removeTodo(todo.id))
          }
          }
        >
          Remove
        </button>) : ""}
    </li>
  )
};

export default Todo;

import React from "react";
import { TodoType } from '../todo/todoSlice'
import { useDispatch } from 'react-redux'
import { doneTodo, removeTodo } from '../todo/todoSlice'
import styles from './Todo.module.css';
export type TodoProps = {
  todo: TodoType
}

const Todo: React.FC<TodoProps> = ({ todo }) => {
  const dispatch = useDispatch()

  return (
    <li className={
      todo.complete ? styles.itemDone : styles.todoItems
    }
      onClick={(_) => {
        dispatch(doneTodo(todo.id))
      }}>
      {todo && todo.complete ? "👌" : "👋"}{" "}
      <span>
        {todo.content}
      </span>
      <button
        style={{
          marginLeft: "25px",
        }}
        onClick={(_) => {
          dispatch(removeTodo(todo.id))
        }
        }
      >
        Remove
      </button>
    </li>
  )
};

export default Todo;

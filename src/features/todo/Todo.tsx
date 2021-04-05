import React from "react";
import { TodoType } from '../todo/todoSlice'
import { useDispatch } from 'react-redux'
import { doneTodo } from '../todo/todoSlice'
import styles from './Todo.module.css';
import TodoRemoveBtn from './TodoRemoveBtn'

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
      {typeDone && typeDone === true ? <TodoRemoveBtn todo={todo} /> : ""}
    </li>
  )
};

export default Todo;

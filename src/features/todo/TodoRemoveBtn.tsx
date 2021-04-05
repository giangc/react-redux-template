import React from "react"
import { removeTodo, TodoType } from '../todo/todoSlice'
import { useDispatch } from 'react-redux'

export type TodoTypeProps = {
  todo: TodoType
}

const TodoRemoveBtn: React.FC<TodoTypeProps> = ({ todo }) => {
  const dispatch = useDispatch()

  return (<button
    style={{
      marginLeft: "25px",
    }}
    onClick={(_) => {
      dispatch(removeTodo(todo.id))
    }}
  >
    Remove
  </button>)
}

export default TodoRemoveBtn
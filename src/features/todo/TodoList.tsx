import React from "react"
import Todo from "./Todo"
import { selectData, selectInProgress, selectDone } from './todoSlice'
import { useSelector } from 'react-redux'
import { FILTERS } from './VisibilityFilters'
export type TodoListProps = {
  select: string
}

const TodoList: React.FC<TodoListProps> = ({ select }) => {
  const todos = useSelector(selectData)
  const inProgress = useSelector(selectInProgress)
  const done = useSelector(selectDone)

  return (
    <ul style={{
      listStyleType: "none",
    }}>
      {
        select === FILTERS[0] &&
          todos &&
          todos.length
          ?
          todos.map((todo, index) => {
            return <Todo key={`todo-${todo.id}`} todo={todo} />;
          })
          :

          select === FILTERS[1] &&
            todos &&
            todos.length
            ?
            inProgress.map((todo, index) => {
              return <Todo key={`todo-${todo.id}`} todo={todo} />;
            })
            :

            select === FILTERS[2] &&
              todos &&
              todos.length
              ?
              done.map((todo, index) => {
                return <Todo key={`todo-${todo.id}`} todo={todo} />;
              })
              :
              "No todos, yay!"

      }
    </ul>
  )
};

export default TodoList


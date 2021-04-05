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
        select === FILTERS[0] && todos && todos.length
          ?
          todos.map((todo, _index) => {
            return (<Todo
              key={`todo-${todo.id}`}
              todo={todo}
              typeDone={false}
            />)
          })
          :
          select === FILTERS[1] && inProgress && inProgress.length
            ?
            inProgress.map((inProgressItem, _) => {
              return <Todo
                key={`todo-${inProgressItem.id}`}
                todo={inProgressItem}
                typeDone={false} />;
            })
            :

            select === FILTERS[2] && done && done.length
              ?
              done.map((doneItem, _) => {
                return <Todo
                  key={`todo-${doneItem.id}`}
                  todo={doneItem}
                  typeDone={true} />;
              })
              :
              "No todos, yay!"

      }
    </ul>
  )
};

export default TodoList


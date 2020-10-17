import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

export type TodoType = {
  id: number,
  content: string,
  complete: boolean
}

interface TodoState {
  data: TodoType[]
}

const initialState: TodoState = {
  data: [
    {
      id: 1,
      content: "wash dishes",
      complete: false
    },
    {
      id: 2,
      content: "watch tv",
      complete: false
    }
  ]
}

// Slice => actions, reducer
export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoType>) => {
      const { id, content, complete } = action.payload

      state.data = [...state.data, {
        id: id,
        content: content,
        complete: complete
      }]

    },
    removeTodo: state => {

    },
    doneTodo: state => {

    },
    updateTodo: state => {

    }
  }
})

export const { addTodo, removeTodo, doneTodo, updateTodo } = todoSlice.actions

export const selectData = (state: RootState) => state.todo.data

export const selectNextId = (state: RootState) => state.todo.data[state.todo.data.length - 1].id + 1

export default todoSlice.reducer


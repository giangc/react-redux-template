import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

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
    },
    {
      id: 3,
      content: "do 100 pushups",
      complete: true
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

    removeTodo: (state, action: PayloadAction<number>) => {
      alert("yay! You've just completed the item" + JSON.stringify(action))
      state.data = state.data.filter(one => one.id !== action.payload)
    },

    doneTodo: (state, action: PayloadAction<number>) => {
      const updated = state.data.map(each => {
        if (each.id === action.payload) {
          alert('removing warn')
          return {
            id: each.id,
            content: each.content,
            complete: true
          }
        }
        else return each
      })
      state.data = [...updated]
    },

    updateTodo: state => {

    }
  }
})

export const { addTodo, removeTodo, doneTodo, updateTodo } = todoSlice.actions

export const selectData = (state: RootState) =>
  state.todo.data

export const selectInProgress = (state: RootState) =>
  state.todo.data.filter(each =>
    each.complete === false)

export const selectDone = (state: RootState) =>
  state.todo.data.filter(each =>
    each.complete === true)

export const selectNextId = (state: RootState) => state.todo.data[state.todo.data.length - 1].id + 1

export default todoSlice.reducer


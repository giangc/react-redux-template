import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import TodoType from './types/TodoType'
import initialState from './types/intialState'
import doneTask from './types/doneTask'
import produce from "immer"

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

    updateTodoThatNeedsValidation: (
      state,
      action: PayloadAction<number>) => {

      state = produce(state, draftState => {
        draftState.data.push(doneTask)
        draftState.data.map(each => {
          if (each.id === action.payload) each.complete = true
        })
      })

    }
  }
})

export const { addTodo, removeTodo, doneTodo, updateTodoThatNeedsValidation } = todoSlice.actions

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


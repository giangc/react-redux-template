import MyReducerType from '../types/MyReducerType'
import { UPDATE } from './actionTypes'

const initState: MyReducerType = {
  content: 'hello'
}

export type MyReducerAction = {
  type: string,
  payload: {
    content: string
  }
}

const myReducer = (state = initState, action: MyReducerAction) => {
  switch (action.type) {
    case UPDATE:
      state.content = action.payload.content
      alert("updated: " + action.payload.content)
      return Object.assign({}, state, {
        content: action.payload.content
      })
    default: return state;
  }
}

export default myReducer

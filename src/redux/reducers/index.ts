import { combineReducers } from 'redux'
import myReducer from './myReducer'

export const rootReducer = combineReducers({
  myReducer
})

export type RootState = ReturnType<typeof rootReducer>

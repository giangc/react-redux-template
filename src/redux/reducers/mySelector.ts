import { RootState } from "."

export const selectContent = (store: RootState) => {
  return store.myReducer.content
}

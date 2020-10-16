import { UPDATE } from './actionTypes'

export const update = (content: string) => {
  return {
    type: UPDATE,
    payload: {
      content: content
    }
  }
}

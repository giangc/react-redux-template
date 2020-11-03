import { todoSlice, updateTodoThatNeedsValidation } from '../todoSlice'
import TodoState from '../types/TodoState'

describe('todo slice', () => {
  const { reducer } = todoSlice
  const initialState: TodoState = {
    data: [
      {
        id: 1,
        content: "do homework",
        complete: false
      },
    ]
  }
  it('done on task needs validation will done on the task and create a validation task',
    () => {
      const result = {
        data:
          [
            { id: 1, content: 'do homework', complete: true },
            { id: 2, content: 'check if homework is done', complete: false }
          ]
      }

      const actual = reducer(initialState, updateTodoThatNeedsValidation(1))
      console.log("giang, actual: ", actual)

      expect(actual).toEqual(result)
    })
})

export { }
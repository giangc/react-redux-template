import { initialState, addTodo, removeTodo, doneTodo, updateTodo, todoSlice } from '../todoSlice'

describe('todo reducer', () => {
  const { reducer } = todoSlice

  it('typeof addTodo is function', () => {
    expect(typeof addTodo).toBe('function')
  })

  it('add Todo result correctly', () => {
    const adding = {
      id: 4,
      content: 'more workout',
      complete: false
    }

    expect(reducer(initialState, addTodo(adding))).toEqual(
      {
        data: [
          ...initialState.data, adding
        ]
      }
    )
  })

  it('remove todo correctly', () => {
    const jsdomAlert = window.alert;
    window.alert = () => { };
    expect(reducer(initialState, removeTodo(1))).toEqual({
      data: [
        // {
        //   id: 1,
        //   content: "wash dishes",
        //   complete: false
        // },
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
    })
    window.alert = jsdomAlert;
  })

  it('done todo correctly', () => {
    const jsdomAlert = window.alert;
    window.alert = () => { };

    expect(reducer(initialState, doneTodo(1))).toEqual(
      {
        data: [
          {
            id: 1,
            content: "wash dishes",
            complete: true
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
    )
    window.alert = jsdomAlert;
  })

  it('update todo correctly', () => {
    expect(reducer(initialState,
      updateTodo(
        {
          id: 1, update: {
            content: "run for one hour",
            complete: false
          }
        }
      )))

      .toEqual(
        {
          data: [
            {
              id: 1,
              content: "run for one hour",
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
      )
  })

  it('add todo does not allow to add duplication', () => {
    const duplicationId = {
      id: 1, content: "some duplication work", complete: false
    }

    expect(reducer(initialState, addTodo(duplicationId))).toEqual(initialState)
  })
})
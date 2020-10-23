import { increment, decrement, incrementByAmount, counterSlice } from '../counterSlice'

describe('action', () => {
  it('typeof function', () => {
    expect(typeof increment).toBe('function')
  })

  it('should have correct actionType', () => {
    expect(increment()).toEqual({
      type: 'counter/increment',
      payload: undefined
    })
  })

  it('should have correct reducer increment result', () => {
    const { reducer } = counterSlice
    expect(reducer(undefined, increment())).toEqual({
      value: 1
    })
  })

  it('should have correct reducer decrement result', () => {
    const { reducer } = counterSlice
    expect(reducer({
      value: 2
    }, decrement())).toEqual({
      value: 1
    })
  })

  it('should have correct reducer decrement by amount result', () => {
    const { reducer } = counterSlice
    expect(reducer({
      value: 2
    }, incrementByAmount(2))).toEqual({
      value: 4
    })
  })


})
import { increment, CounterState, counterSlice } from "../counterSlice"

test('Sample', () => {
  expect(1 + 1).toBe(2)
})

test('Counter Slice: increment amount', () => {
  // create inital state
  const initialState: CounterState = {
    value: 0,
  };
  // get the result
  counterSlice

  const result = increment() {
    type: 'Counter',
    payload: initialState
  }

  expect(result).toBe<CounterState>({
    value: 1
  })

})

export { }
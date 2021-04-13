import { counterSlice, increment } from "../counterSlice"

describe("Testing counter reducer:", () => {
  const reducer = counterSlice.reducer

  it("increment()", () => {
    const initState = {
      value: 0
    }
    const result = reducer(initState, increment())

    expect(result.value).toBe(1)
  })

})
export { }
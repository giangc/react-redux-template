import produce from "immer"

test('Immer: first example', () => {
  const baseState = [
    {
      todo: "work out",
      done: true
    },
    {
      todo: "swimming",
      done: false
    }
  ]

  const nextState = produce(baseState, draftState => {
    draftState.push({
      todo: "Eat",
      done: false
    })
  })

  expect(nextState.length).toBe(3)
  expect(nextState[2].todo).toBe("Eat")
})


test("Immer: curried producer", () => {
  const mapper = produce((draft, index) => {
    draft.age = draft.name
  })

  // example usage
  const mapping = [{ name: "giang" }, { name: "giang" }, { name: "giang" }].map(mapper)
  console.dir(mapping)
})

test("Immer: curried producer use case", () => {
  const mapper = produce((draft, index: { productName: string, type: string }) => {
    if (index.type === "RECEIVED_PRODUCT")
      draft.age = 10
  })

  // example usage
  const mapping = [{
    productName: "toothbrush",
    type: "RECEIVED_PRODUCT"
  }].map(mapper)
  console.dir(mapping)
})


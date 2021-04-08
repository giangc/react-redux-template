test('Test concat array functionality', () => {
  const test = [{ name: "giang" }].concat({ name: "khit" })
  expect(test.length).toBe(2)
  const second = test[1]
  expect(second.name).toBe("khit")
})

test('Test concat: concat with more complex stuff', () => {
  const myObj = { items: ['hello', 'world', 'click', 'me'] }
  const update = myObj.items.concat('GIANG')
  expect(update.length).toBe(5)

  const updateObj = { items: myObj.items.concat('GIANG') }
  expect(updateObj.items.length).toBe(5)
  expect(updateObj.items[4]).toBe("GIANG")
})

export { }
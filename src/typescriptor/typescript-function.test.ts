test('First test', () => {
  expect(1 + 1).toBe(2)
});


function print(id: number | string) {
  if (typeof id === "string") {
    console.log("Your id is " + id.toUpperCase())

  }
  else {
    console.log("Your id is " + id)
  }
}

test('Test: Printing and testing union type', () => {
  print(1)
  print("abcd")
});

// Function Return type
function summer(a: number, b: number): number {
  return a + b
}

const sumOf = (a: number, b: number) => {
  return a + b
}

test('Test: sumOf', () => {
  const sum = sumOf(1, 2)
  expect(sum).toBe(3)
})

// Function Type Expressions
function passSumOfAsParam(fn: (a: number, b: number) => number) {
  return fn(3, 4)
}

test('Test: passing Sum as a param', () => {
  const result = passSumOfAsParam(sumOf)
  expect(result).toBe(7)
})

function passFunctionAsParam(fn: (msg: string) => void) {
  fn("Sup")
}

function paramFunction(str: string) {
  console.log(str)
}

test('Test: passFunctionAsParam', () => {
  passFunctionAsParam(paramFunction)
})

type DescribableFunction = {
  description: string;
  method(a: number | string, b: number | string): number;
  minusMethod: (a: number, b: number) => number;
};

function describingFn(arg1: number, arg2: number): boolean {
  return typeof arg1 === "number" && typeof arg2 === "number"
}

function doSomething(fn: DescribableFunction): {
  desc: string, result: number, minusResult: number
} {
  const desc = fn.description
  const result = fn.method(1, 2)
  const minusResult = fn.minusMethod(5,2)
  return { desc, result, minusResult }
}

test('Test: result with function as a property', () => {
  const result = doSomething(<DescribableFunction>{
    description: "This is a testing method",
    method: function (a: number, b: number) { return a + b },
    minusMethod: (a, b) => { return a - b }
  })
  expect(result.desc).toBe("This is a testing method")
  expect(result.result).toBe(3)
  expect(result.minusResult).toBe(3)
})

export { }
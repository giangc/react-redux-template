type Student = {
  name: string,
  age: number
}

function printStudent(aStudent: Student) {
  return "name: " + aStudent.name + " age: " + aStudent.age
}

test('Test type object', () => {
  const student: Student = {
    name: "giang", age: 24
  }
  console.log(printStudent(student))
})

type StudentMark = {
  name: string, 
  isFromRemote: boolean,
  marking: (realMark: number) => number
}

function calulateMark(studentMark: StudentMark): string {
  const mark = studentMark.marking
  return `NAME: ${studentMark.name}, comes from remote area is ${studentMark.isFromRemote}, mark is ${mark}`
}

test('Test sudo function for marking remote area student should incremeted mark by 2',
 () => {
  const studentMarker: StudentMark = {
    name: "Giang", 
    isFromRemote: true, 
    marking: (mark: number) => number
  }
  const printer = calulateMark(studentMarker)
  console.log(printer)
})

export { }
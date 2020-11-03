import TodoState from "./TodoState"

const initialState: TodoState = {
  data: [
    {
      id: 1,
      content: "wash dishes",
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
export default initialState
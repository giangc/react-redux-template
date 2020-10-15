import React from "react";

// import { connect } from "react-redux";
// import { toggleTodo } from "../redux/actions";
export type TodoTypes = {
  todo: {
    id: number
    completed: boolean,
    content: string
  }
  toggleTodo: (id: number) => void
}

const Todo: React.FC<TodoTypes> = ({ todo, toggleTodo }) => (
  <li className="todo-item" onClick={() => toggleTodo(todo.id)}>
    {todo && todo.completed ? "👌" : "👋"}{" "}
    <span>
      {todo.content}
    </span>
  </li>
);

export default Todo;
// export default connect(
//   null,
//   { toggleTodo }
// )(Todo);

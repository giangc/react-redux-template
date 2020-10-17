import React from "react";
// import { connect } from "react-redux";
// import { toggleTodo } from "../redux/actions";
import { TodoType } from '../todo/todoSlice'

export type TodoProps = {
  todo: TodoType
}

const Todo: React.FC<TodoProps> = ({ todo }) => (
  <li className="todo-item" onClick={() => alert('done')}>
    {todo && todo.complete ? "👌" : "👋"}{" "}
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

import TodoItem from "./TodoItem";
import { memo } from "react";

function Todos({ todos }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} />
      ))}
    </ul>
  );
}
export default memo(Todos);

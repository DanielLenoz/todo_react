import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCounter.css";

function TodoCounter() {
  const { completedTodos, totalTodos}=React.useContext(TodoContext)

  return totalTodos == completedTodos ? (
    <h1 className="TodoCounter"> has completados todos los todo 😎😎</h1>
  ) : (
    <h1 className="TodoCounter">
      has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> totales
    </h1>
  );
}

export { TodoCounter };
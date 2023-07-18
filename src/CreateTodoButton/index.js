import React from "react";
import "./CreateTodoButton.css";
import { TodoContext } from "../TodoContext";

function CreateTodoButton() {
  const { openModal, setOpenModal } = React.useContext(TodoContext);
  return (
    <button
      className="CreateTodoButton"
      onClick={(event) => {
        console.log(event.target);
        openModal ? setOpenModal(false) : setOpenModal(true);
        // setOpenModal(state => !state) le estamos cambian el estado 
      }}
    >
      +
    </button>
  );
}
export { CreateTodoButton };

import "./CreateTodoButton.css";
import { useContext } from "react";
import { TodoContext } from "../TodoContext";

function CreateTodoButton() {
  const { toogleModal } = useContext(TodoContext)
  return (
    <button
      className="CreateTodoButton"
      onClick={() => {
        toogleModal()
      }}
    >
      +
    </button>
  );
}
export { CreateTodoButton };

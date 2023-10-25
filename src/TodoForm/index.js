import React, { useState } from "react";
import './TodoForm.css'
import { TodoContext } from "../TodoContext"

function TodoForm() {
    const { toogleModal, addTodo } = React.useContext(TodoContext)
    const [newTodoValue, setNewTodoValue] = useState('');

    const onSubmit = (event) => {
        event.preventDefault()
        toogleModal()
        addTodo(newTodoValue);
    }

    const onCancel = () => {
        toogleModal()
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }
    return (

        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO🐹</label>
            <textarea placeholder="🐰Cortar cebolla" value={newTodoValue} onChange={onChange} />


            <div className="TodoForm-buttonContainer">
                <button className="TodoForm-button TodoForm-button--cancel" onClick={onCancel}>Cancelar</button>
                <button className="TodoForm-button TodoForm-button--add">Añadir</button>
            </div>
        </form>
    )
}

export { TodoForm }
import React from "react"
import "../style.scss"

interface Props {
    todo: string
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e: React.FormEvent<EventTarget>) => void;
}

const InputField = ({ todo, setTodo, handleAdd }: Props) => {

    return (
        <form className="input" onSubmit={handleAdd}>
            <input type="text" placeholder="Name" value={todo} onChange={(e) => setTodo(e.target.value)} className="input_box" />
            <button className="input_button" type="submit">Go</button>
        </form>
    )
}

export default InputField;
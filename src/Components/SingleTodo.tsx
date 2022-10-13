import React, { useState } from "react"
import { Todo } from "../models"
import { AiFillDelete, AiOutlineCheck, AiFillEdit } from 'react-icons/ai';

type Props = {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SignleTodo = ({ todo, todos, setTodos }: Props) => {

    const [edit, setEdit] = useState<boolean>(false)
    const [editTodo, setEditTodo] = useState<string>(todo.todo)

    const handleDone = (id: number) => {
        console.log(id);
        setTodos(todos.map((todo) => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo))
    }

    const handleDelete = (id: number) => {
        setTodos(
            todos.filter((todo) => todo.id !== id)
        )
    }

    const handleEdit = () => {
        if (!edit && !todo.isDone) {
            setEdit(!edit)
        }
    }

    const handleEditTodo = (e:React.FormEvent , id:number) => {
        e.preventDefault()
        setTodos(
            todos.map(todo => 
                todo.id === id ? {...todo, todo: editTodo} : todo
            )
        )
        setEdit(false)
    }


    return (
        <form className="todos_single" onSubmit={(e) =>handleEditTodo(e, todo.id)}>

            {
                edit ? (
                    <input value={editTodo} onChange={(e) => setEditTodo(e.target.value)}/>
                ) :
                    (
                        todo.isDone ? (
                            <s className="todos_single_text">
                                {todo.todo}
                            </s>
                        ) : (
                            <span className="todos_single_text">
                                {todo.todo}
                            </span>
                        )
                    )
            }



            <div className="icons">
                <span className="icon" onClick={() => handleDelete(todo.id)}>
                    <AiFillDelete />
                </span>
                <span className="icon" onClick={() => handleEdit()}>
                    <AiFillEdit />
                </span>
                <span className="icon" onClick={() => handleDone(todo.id)}>
                    <AiOutlineCheck />
                </span>
            </div>
        </form>
    )
}
export default SignleTodo
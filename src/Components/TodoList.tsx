import React from "react"
import { Todo } from "../models";
import "../style.scss"
import SignleTodo from "./SingleTodo";

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}



const TodoList = ({ todos, setTodos }: Props) => {
    return (
        <div className="todos">
           {
            todos.map((data, index) => {
                return(
                    <SignleTodo
                    key={index}
                    todo={data}
                    todos={todos}
                    setTodos={setTodos}
                    />
                )
            })
           }
        </div>
    )
}

export default TodoList
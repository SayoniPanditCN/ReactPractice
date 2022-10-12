import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import InputField from "../src/Components/InputField"
import { Todo } from "./models"
import TodoList from './Components/TodoList';

const App = () => {

  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault()
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }])
      setTodo("")
    }
  }


  return (
    <div className="App">
      <header className="App-header">
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList todos={todos} setTodos={setTodos}/>
      </header>
    </div>
  );
}

export default App;

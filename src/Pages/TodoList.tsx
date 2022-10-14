import React, { useEffect, useState } from 'react';
import '../App.css';
import InputField from "../Components/InputField"
import { Todo } from '../models';
import TodoList from '../Components/TodoList';
import { useSelector, useDispatch } from 'react-redux';
import { addlist, increment } from '../actions';

const TodoListComp = () => {

  const dispatch = useDispatch()

  const { list, counter } = useSelector((state: any) => state)




  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault()
    if (todo) {
      let data = [...todos, { id: Date.now(), todo: todo, isDone: false }]
      setTodos([...data])
      setTodo("")
      dispatch(addlist(JSON.stringify([...data])))
    }
  }
  const IsParsable = (data: any) => {
    try {
      JSON.parse(data);
    } catch (e) {
      return false;
    }
    return true;
  }
  const ListAll = IsParsable(list) ? JSON.parse(list) : false
  console.log("List", ListAll);
  console.log("todos", todos);

  return (
    <div >
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={ListAll} setTodos={setTodos} />
    </div>
  );
}

export default TodoListComp;

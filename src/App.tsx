import React, { useState } from 'react';
import "./App.css"
import TodoListComp from './Pages/TodoList';



const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <TodoListComp />
      </header>
    </div>
  );
}

export default App;

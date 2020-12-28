import React, { useState } from 'react';
import TodoList from './TodoList'

function App() {
  const [todos, setTodos] = useState(["todo 1", "Todo 2"])
  return (
   < > 
   <TodoList todos={todos}/>
    <input type="text"></input>
    <button>add todo</button>
    <button>Clear Complete</button>
    <div>0 left to do</div>
    < /> 
  )
}

export default App;

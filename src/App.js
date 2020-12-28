import React, { useState } from 'react';
import TodoList from './TodoList'

function App() {
  const [todos, setTodos] = useState([{ id:1 , name: "todo 1", complete: false}])
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

import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList'
//import uuidv4 from 'uuid/v4'

const localStorageKey = 'todoApp.todos'
function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef() 

  useEffect(()=> {
const storedTodos = JSON.parse(localStorage.getItem(localStorageKey))
if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() =>{
    localStorage.setItem(localStorageKey, JSON.stringify(todos))
  },[todos])

function toggleTodo(id){
  const newTodos = [...todos]
  const todo = newTodos.find(todo => todo.id === id)
  todo.complete = !todo.complete
  setTodos(newTodos)
}

  function handleAddTodo(e){
    const name = todoNameRef.current.value 
    if (name === '') return
    setTodos(prevTodos => {
      return[...prevTodos,{id:1, name:name, complete:false }]
    })
    todoNameRef.current.value = null
  }

  function handleClearTodos(){
    const newTodos = todos.filter(todo=> !todo.complete)
    setTodos(newTodos)
  }
  return (
   < > 
   <TodoList todos={todos} toggleTodo ={toggleTodo}/>
    <input ref={todoNameRef}type="text"></input>
    <button onClick={handleAddTodo}>add todo</button>
    <button onClick={handleClearTodos}>Clear Complete</button>
    <div>{todos.filter(todo => !todo.complete).length} left to do</div>
    < /> 
  )
}

export default App;

import { useEffect, useState } from "react"
import "./style.css"
import { NewTodoForm } from "./NewTodoForm"
import { ToDoList } from "./ToDoList"


export default function App(){
  
  const [todos, setTodos] = useState(()=>{
    const localValue=localStorage.getItem("ITEMS")
    if(localValue==null) return []

    return JSON.parse(localValue)
  })

  useEffect(()=>{
    localStorage.setItem("ITEMS",JSON.stringify(todos))
  },[todos])
  
  function addTodo(title){
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        {id:crypto.randomUUID(), title, completed: false},
      ]
    })
  }

    

  function toggleTodo(id, completed){
    setTodos(currentTodos=>{
        return currentTodos.map(todo=>{
            if(todo.id === id){
                return { ...todo, completed}
            }
            return todo
        })
    })  
  }

  //it means, filtering through our currentTodos array and keep it if todo.id !== id, otherwise remove it
function deleteTodo(id){
    setTodos(currentTodos=>{
        return currentTodos.filter(todo=> todo.id !== id)
    })
}
  //inside react 'class' is a reserved keyword, so you have to use 'className' for naming a class in react
  //similarly 'htmlFor' instead of 'for' in label,
  return (
    <>

    <NewTodoForm onSubmit={addTodo}/>
    <h1 className="header">To-Do List</h1>
    <ToDoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  )
}


//always use onClick={()=>deleteTodo(id)}, because, this is passing a function, and this onClick={deleteTodo(id)} is passing the result, which means it will automatically delete each time you enter a new todo, instead of ->storing it and using a function to delete it
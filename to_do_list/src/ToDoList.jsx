import { ToDoItem } from "./ToDoItem"
export function ToDoList({todos,toggleTodo,deleteTodo}){

    
    return (
        <ul className="list">
            {todos.length===0 && "No Todos"}
            {todos.map(todo => {
                //as we are rendering this inside an array, we also need to pass a key={todo.title} as well
                return (
                    <ToDoItem
                    {...todo}
                    key={todo.id}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}/>
                )
            })}
            
        </ul>
    )
}
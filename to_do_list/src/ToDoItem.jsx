export function ToDoItem({completed,id,title,toggleTodo,deleteTodo}){
    //as we have passed completed,id,title using destructuring, we do not need to call them by todo.title....etc
    return (
        <li>
            <label>
                <input 
                type="checkbox" 
                checked={completed}
                onChange={e=>toggleTodo(id, e.target.checked)}
                />
                {title}
            </label>
            <button 
            onClick={()=>deleteTodo(id)} 
            className="btn btn-danger">Delete</button>
        </li>
    )
}
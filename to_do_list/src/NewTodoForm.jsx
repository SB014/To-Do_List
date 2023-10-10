import { useState } from "react"

//instead of props.onSubmit, you can also use destructuring and pass {onSubmit} inside function arguement of export
export function NewTodoForm(props){
    props.onSubmit
    const [newItem, setnewItem] = useState("")

    function handleSubmit(e) {
        e.preventDefault() //this prevents refreshing of page, until the value has been used
        
        if(newItem==="") return
        props.onSubmit(newItem)
    
        setnewItem("")
    }

    return (
        <form onSubmit={handleSubmit} className="new-item-form">
            <div className="form-row">
                <label htmlFor="item">New Item</label>
                <input 
                value={newItem} 
                onChange={e => setnewItem(e.target.value)}
                type="text" 
                id="item"/> 
            </div>
            <button className="btn">Add</button>
        </form>
    )
}
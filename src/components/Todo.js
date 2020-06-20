import React from "react"

function Todo(props) {
    return (
        <div className='todo'>
            <input type='checkbox' checked={props.completed}></input>
            <h3>{props.text}</h3>
        </div>
    )
}

export default Todo;
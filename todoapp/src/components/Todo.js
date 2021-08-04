import React from 'react'

const Todo = (props) => {
    //Events
    const completeHandler = () => {

    }
    
    const deleteHandler = () => {
    
    }

    return(
        <div className="todo">
            <li className="todo-item">{props.text}</li>
            <button onClick={deleteHandler} className="complete-btn"><i className="fas fa-check"></i></button>
            <button onClick={completeHandler} className="trash-btn"><i className="fas fa-trash"></i></button>
        </div>
    );
}

export default Todo;
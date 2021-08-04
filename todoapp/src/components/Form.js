import React from 'react';
//https://www.youtube.com/watch?v=pCA4qpQDZD8&t=1168s (29:42)

const Form = (props) => {
    //Here i can run JS and Func.
    const inputTextHandler = (event) => {
      console.log(event.target.value);
      //Input wird hier neu gesetzt
      props.setTextInput(event.target.value);
    }

    const submitTodoHandler = (event) => {
      event.preventDefault();
      props.setTodos([...todos, {text: inputText, completed: false, id: Math.random() * 1000}]);
    }

    return(
    <form>
      <input onChange={inputTextHandler} type="text" className="todo-input"/>
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    );
}

export default Form;
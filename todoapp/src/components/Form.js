import React from "react";

const Form = (props) => {
  //Here i can run JS and Func.
  const inputTextHandler = (event) => {
    console.log(event.target.value);
    //Input wird hier neu gesetzt
    props.setTextInput(event.target.value);
  };

  const submitTodoHandler = (event) => {
    event.preventDefault();
    props.setTodos([
      ...props.todos,
      { text: props.textInput, completed: false, id: Math.random() * 1000 },
    ]);
    console.log(props.todos);
    props.setTextInput("");
  };

  const statusHandler = (event) => {
    console.log(event.target.value);
    props.setStatus(event.target.value);
  };

  return (
    <form>
      <input
        value={props.textInput}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;

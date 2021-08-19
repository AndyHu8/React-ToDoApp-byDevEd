import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
  //Events
  const completeHandler = () => {};

  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  return (
    <div className="todo">
      <li className="todo-item">{text}</li>
      <button onClick={deleteHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={completeHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;

import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
  //Events
  const completeHandler = () => {
    setTodos(
      todos.map((el) => {
        if (el.id === todo.id) {
          //...el = nimm die alten Daten, aber ändere nur completed
          return { ...el, completed: !el.completed };
        }
        return el;
      })
    );
  };

  const deleteHandler = () => {
    //Gehe durch alle Todos und setze alle außer das Todo mit richtiger Id, worauf man klickt
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;

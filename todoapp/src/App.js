import React, { useState, useEffect } from "react";
import "./App.css";

//Import components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

//https://www.youtube.com/watch?v=pCA4qpQDZD8&t=873s (01:15:01)

function App() {
  //Input, Funkt., die Input ändert
  //State Stuff
  const [textInput, setTextInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //Functions
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  //Run once when the app start (useEffect)
  useEffect(() => {
    getLocalTodos();
  }, []);

  //UseEffect bei Submit & Completed change
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  //local storage
  //Ins local storage speichern
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  //Vom local storage Daten bekommen
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoFromLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoFromLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Hudo List</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        textInput={textInput}
        setTextInput={setTextInput}
        setStatus={setStatus}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;

import React, {useState} from 'react';
import './App.css';

//Import components
import Form from './components/Form';
import TodoList from './components/TodoList';

//https://www.youtube.com/watch?v=pCA4qpQDZD8&t=873s (48:23)

function App() {
  //Input, Funkt., die Input ändert
  const [textInput, setTextInput] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>Hudo List</h1>
      </header>
      <Form todos={todos} setTodos={setTodos} textInput={textInput} setTextInput={setTextInput}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
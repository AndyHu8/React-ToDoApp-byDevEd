import React, {useState} from 'react';
import './App.css';

//Import components
import Form from './components/Form';
import TodoList from './components/TodoList';

//https://www.youtube.com/watch?v=pCA4qpQDZD8&t=873s (19:57)

function App() {
  //Input, Funkt., die Input ändert
  const [textInput, setTextInput] = useState("");
  return (
    <div className="App">
      <header>
        <h1>Hudo List</h1>
      </header>
      <Form/>
      <TodoList/>
    </div>
  );
}

export default App;
import React, {useState} from "react"
import './App.css';


function App() {
  // Below array destructuren syntax is equivalent toString; 
  // const newTodoStateArr = useState("");
  //const newTodo = newTodoSTateArr[0];
  //const setNewTodo = newTodoStateArr[1];



  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleNewTodoSubmit=(event) => {
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={(event) => {
        handleNewTodoSubmit(event);
      }}>
        <input onChange={(event) => {
          setNewTodo(event.target.value);
        }} type="text" />
        div
      </form>
    </div>
  );
}

export default App;

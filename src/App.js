import React, { useState } from "react"
import './App.css';

import Todo from "./components/Todo";

function App() {
  // Below array destructuren syntax is equivalent toString; 
  // const newTodoStateArr = useState("");
  //const newTodo = newTodoSTateArr[0];
  //const setNewTodo = newTodoStateArr[1];



  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleNewTodoSubmit = (event) => {
    event.preventDefault();

    if (newTodo.length === 0) {
      return;
    }

    const todoItem = {
      text: newTodo,
      complete: false
    };
    //setTodos and pass in a brand new array containing all current todos plus 1more.

    setTodos([...todos, todoItem]);
    setNewTodo("");
  };
  const handleTodoDelete = (delIdx) => {
    const filteredTodos = todos.filter((todo, i) => {
      return i === delIdx;
    });

    setTodos(filteredTodos);
  };

  const handleToggleComplete = (idx) => {
    const updatedTodos = todos.map((todo, i) => {
      if (idx === i) {
        todo.complete = !todo.complete;
        //To avoid mutating the todo directly, do this:
        // const updatedTodos = { ... todo, complete: !todo.complete };
        // return updatedTodos;
      }

      return todo;
    });

    setTodos(updatedTodos);
  }

    return (
      
      <div style={{ textAlign: "cemter" }}>
        <form
          onSubmit={(event) => {
            handleNewTodoSubmit(event);
          }}
        >
          <input onChange={(event) => {
            setNewTodo(event.target.value);
          }}
            type="text"
            value={newTodo} />
          <div>
            <button>Add</button>
          </div>
        </form>
        <hr />

        {todos.map((todo, i) => {
            return (
             <Todo 
             key={i}
             i={i} 
             todo={todo}
             handleToggleComplete={handleToggleComplete} 
             handleTodoDelete={handleTodoDelete}
             />
            );
          })}
      </div>
    );
  }

  export default App;

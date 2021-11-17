// todo - implement edit modal
// todo - implment drag and drop reodering?
import React, { useState } from "react";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import "./App.css"

function App() {
  const [todoList, setTodoList] = useState([]);

  const todoSubmit = (todo) => {
    // takes a todo item from Todo.js and adds it to the todo list
    if (!todo) return;
    setTodoList([...todoList, todo]);
    console.log(todoList);
  };

  const handleDelete = (todoIndex) => {
    setTodoList(
      todoList.filter((element, index) => {
        return index !== todoIndex;
      })
    );
  };

  return (
    <div className="App">
      <div className="top">
      <h1>Second React Todolist</h1>
      <TodoItem todoSubmit={todoSubmit} />
      </div>
      <TodoList todoList={todoList} handleDelete={handleDelete} />
    </div>
  );
}

export default App;

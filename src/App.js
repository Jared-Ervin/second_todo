import React, { useState } from "react";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";

function App() {
  const [todoList, setTodoList] = useState([]);

  const todoSubmit = (todo) => {
    // takes a todo item from Todo.js and adds it to the todo list
    if (!todo) return;
    setTodoList([todo, ...todoList]);
  };

  return (
    <div className="App">
      <h1>Second React Todolist</h1>
      <TodoItem todoSubmit={todoSubmit} />
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;

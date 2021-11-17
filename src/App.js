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
    if (!todo.task) return;
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

  // handleEdit = (todoIndex) => {

  // }

  return (
    <div className="App">
      <div className="top">
      <h1>Second React Todolist</h1>
      <TodoItem todoSubmit={todoSubmit} />
      </div>
      <TodoList todoList={todoList} handleDelete={handleDelete} handleEdit={null}/>
    </div>
  );
}

export default App;

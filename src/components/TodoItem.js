import React, { useState } from "react";

export function TodoItem(props) {
  const [todo, setTodo] = useState({ task: "", time: "" });

  const handleChange = (event) => {
    // controls the input box
    const inputValue = event.target.value;
    const stamp = new Date().toLocaleString();
    setTodo({ task: inputValue, time: stamp });
  };

  const handleClick = () => {
    props.todoSubmit(todo);
    setTodo({ task: "", time: "" });
  };

  console.log(todo);
  return (
    <div>
      <input placeholder="New Task" onChange={handleChange} value={todo.task} />
      <span>
        <button onClick={handleClick}>Create Task</button>
      </span>
    </div>
  );
}

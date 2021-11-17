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
    <div className="submission-wrapper">
      <input
        className="input-box"
        placeholder="What do you want to do?"
        onChange={handleChange}
        value={todo.task}
      />
      <button className="submit-button" id="new-task" type="submit" onClick={handleClick}>
        +
      </button>
    </div>
  );
}

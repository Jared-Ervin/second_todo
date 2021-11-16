import React, { useState } from "react";

export function TodoItem(props) {
  const [todo, setTodo] = useState("");
//   const [timeStamp, setTimeStamp] = useState('')

  const handleChange = (event) => {
    // controls the input box
    const inputValue = event.target.value;
    setTodo(inputValue);
  };

  const handleClick = () => {
    // recieves handleSubmit function as prop
    props.todoSubmit(todo);
    setTodo("");
  };

  console.log(todo);
  return (
    <div>
      <input placeholder="New Task" onChange={handleChange} value={todo} />
      <span>
        <button onClick={handleClick}>Create Task</button>
      </span>
    </div>
  );
}

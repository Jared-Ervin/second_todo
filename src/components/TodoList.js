import React, { useState } from "react";

export function TodoList(props) {
  //takes the current todlist as prop and returns jsx to render it as a list
  const makeList = () => {
    return props.todoList.map((element, index) => {
      const { task, time } = element;
      return (
        <div className="todo-item-wrapper" key={index}>

          <div className="todo-item">
            <li>
              <div className="task">
                {task}{" "}
              </div>
              <div className="time">Created at: {time} </div>
              
            </li>
            
          </div>
          <button
            id="delete-button"
            style={{ marginRight: 20 }}
            onClick={() => props.handleDelete(index)}
          >
            &#10004;
          </button>
        </div>
      );
    });
  };

  return <ul>{makeList()}</ul>;
}

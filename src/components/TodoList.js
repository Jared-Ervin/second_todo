import React, { useState } from "react";

export function TodoList(props) {
  //takes the current todlist as prop and returns jsx to render it as a list
  const makeList = () => {
    return props.todoList.map((element, index) => {
      const stamp = new Date();
      return (
        <div key={index}>
          <button style={{ marginRight: 20 }}>X</button>
          <li style={{ display: "inline" }}>
            <b>
              {" "}
              Task {index + 1}: {element}{" "}
            </b>{" "}
            - {stamp.toLocaleString()}
          </li>
        </div>
      );
    });
  };

  return <ul>{makeList()}</ul>;
}

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveTodo } from "../../features/todoSlice";
import "./Input.css";

const Input = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodo = () => {
    console.log(`Adding ${input} `);
    if (!input) {
      alert('enter an item.');
      return;
    }
    dispatch(
      saveTodo({
        item: input,
        done: false,
        id: Date.now(),
      })
    );
    setInput("");
  };

  return (
    <>
     <div className="heading">
        <h1>To-Do List</h1>
      </div>
    <div className="input">
      <input
        type="text"
        value={input}
        placeholder="Add an item..."
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
    </div>
    </>
  );
};

export default Input;

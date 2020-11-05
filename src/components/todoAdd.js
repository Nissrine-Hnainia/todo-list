import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../JS/actions/actions";
import "./todoAdd.css";

const TodoAdd = ({ filter, handleFilter }) => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <input
        className="input-cntr"
        placeholder=" add todo ..."
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button
        onClick={() =>
          dispatch(
            addTask({ id: Date.now(), description: input, isDone: false })
          )
        }
      >
        Add
      </button>
      <button onClick={handleFilter}>{filter ? "All" : "Filter"}</button>
    </div>
  );
};

export default TodoAdd;

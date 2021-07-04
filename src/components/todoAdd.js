import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../JS/actions/actions";

const TodoAdd = ({ filter, handleFilter }) => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="todo">
      <div className="add">
      <input
        className="input-cntr"
        placeholder=" add todo ..."
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
        <button
        onClick={() =>
          dispatch(
            addTask({ id: Date.now(), description: input, isDone: false }),
            setInput("")
          )
        }
      >
        Add
        </button>
      </div>
      <button onClick={handleFilter}>{filter ? "All" : "Completed"}</button>
    </div>
  );
};

export default TodoAdd;

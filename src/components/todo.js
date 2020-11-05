import React, { useState } from "react";
import { useSelector } from "react-redux";
import TodoAdd from "./todoAdd";
import TodoList from "./todoList";

const Todo = () => {
  const [filter, setFilter] = useState(false);

  const tasks = useSelector((state) => state);
  return (
    <div>
      <TodoAdd handleFilter={() => setFilter(!filter)} filter={filter} />
      <TodoList
        tasks={filter ? tasks.filter((el) => el.isDone) : tasks} />
    </div>
  );
};

export default Todo;

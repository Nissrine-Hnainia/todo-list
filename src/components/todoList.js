import React from "react";
import { useDispatch } from "react-redux";
import { checkTask, deleteTask } from "../JS/actions/actions";
import TodoEdit from "./todoEdit";
import { FcEmptyTrash } from "react-icons/fc";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import "./todoList.css";

const TodoList = ({ tasks }) => {
  const dispatch = useDispatch();
  if (tasks.length > 0) {
    return (
      <div className="main-cntr">
        {tasks.map((task, key) => (
          <div key={key}>
            <div className="list-cntr">
              <span onClick={() => dispatch(checkTask(task.id))}>
                {task.isDone ? (
                  <ImCheckboxChecked size={25} color="#046b44" />
                ) : (
                  <ImCheckboxUnchecked size={25} color="#302b2b" />
                )}
              </span>
              <div>
                <p className={task.isDone ? "check" : ""}>{task.description}</p>{" "}
              </div>
              <FcEmptyTrash
                onClick={() => dispatch(deleteTask(task.id))}
                size={25}
              />
              <TodoEdit task={task} />
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    return null;
  }
};

export default TodoList;

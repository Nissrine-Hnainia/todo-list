import React from "react";
import { useDispatch } from "react-redux";
import { checkTask, deleteTask } from "../JS/actions/actions";
import TodoEdit from "./todoEdit";
import { BsTrash } from "react-icons/bs";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";

const TodoList = ({ tasks }) => {
  const dispatch = useDispatch();
  if (tasks.length > 0) {
    return (
      <div className="main-container">
        {tasks.map((task, key) => (
          <div key={key}>
            <div className="list-container">
              <div className="left">
                <span onClick={() => dispatch(checkTask(task.id))}>
                  {task.isDone ? (
                    <ImCheckboxChecked size={25} color="#c957ba" />
                  ) : (
                    <ImCheckboxUnchecked size={25} color="#302b2b" />
                  )}
                </span>
                <p className="test-description">{task.description}</p>
              </div>
              <div className="right"> 
                <BsTrash
                  onClick={() => dispatch(deleteTask(task.id))}
                  size={25}
                />
                <TodoEdit task={task} />
              </div>
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

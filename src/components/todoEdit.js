import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../JS/actions/actions";
import { Modal, FormControl, Button } from "react-bootstrap";
import { VscEdit } from "react-icons/vsc";
import "./todoEdit.css";

const TodoEdit = ({ task }) => {
  const [show, setShow] = useState(false);
  const [taskTodo, setTaskTodo] = useState(task.description);
  const dispatch = useDispatch();

  return (
    <div>
      <VscEdit onClick={() => setShow(true)} size={20} />
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Body>
          <FormControl
            placeholder="edit your task"
            value={taskTodo}
            onChange={(e) => setTaskTodo(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            style={{ width: "60px" }}
            onClick={() =>
              dispatch(editTask({ id: task.id, description: taskTodo }))
            }
          >
            save
          </Button>
          <Button
            variant="secondary"
            style={{ width: "60px" }}
            onClick={() => {
              setShow(false);
              setTaskTodo(task.description);
            }}
          >
            close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TodoEdit;

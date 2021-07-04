import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../JS/actions/actions";
import { Modal, FormControl, Button, Form } from "react-bootstrap";
import { VscEdit } from "react-icons/vsc";

const TodoEdit = ({ task }) => {
  const [show, setShow] = useState(false);
  const [taskTodo, setTaskTodo] = useState(task.description);
  const dispatch = useDispatch();

  return (
    <div>
      <VscEdit onClick={() => setShow(true)} size={25} />
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Body>
        <Form.Label>Edit your task</Form.Label>
          <FormControl
            placeholder="edit your task"
            value={taskTodo}
            onChange={(e) => setTaskTodo(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
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

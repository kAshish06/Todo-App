import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Input from "@material-ui/core/Input";
import { css, jsx } from "@emotion/react";

import { addTodos } from "../services/todo.service";
import "./AddTodo.scss";
/** @jsx jsx */
const AddTodo = () => {
  let [showDetailModal, setShowDetailModal] = useState(false);
  let [todoTitle, setTodoTitle] = useState();
  let [todoDescription, setTodoDescription] = useState();
  function save() {
    const todo = {
      title: todoTitle,
      description: todoDescription,
    };
    console.log(todo);
    addTodos(todo).then((res) => {
      console.log("Todo saved");
    });
    setShowDetailModal(false);
  }
  return (
    <React.Fragment>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          setShowDetailModal(true);
        }}
      >
        Add Todo +
      </Button>
      {showDetailModal && (
        <Card className="add-todo-card">
          <CardContent>
            <Input
              placeholder="Title"
              onChange={(e) => {
                setTodoTitle(e?.target?.value);
              }}
            />
            <Input
              placeholder="Description"
              onChange={(e) => setTodoDescription(e?.target?.value)}
            />
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                setShowDetailModal(false);
              }}
            >
              Cancel
            </Button>
            <Button variant="contained" color="primary" onClick={save}>
              Save
            </Button>
          </CardActions>
        </Card>
      )}
    </React.Fragment>
  );
};

export default AddTodo;

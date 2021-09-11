import React from "react";
import { Form } from "formik";
import Grid from "@material-ui/core/Grid";

import Label from "./Label";
import Input from "./Input";

const TodoModalBody = ({ values, handleChange }) => {
  return (
    <Form className="edit-todo-modal-body">
      <Grid xs={12} item>
        <Label>Title</Label>
        <Input
          type="text"
          name="title"
          variant="outlined"
          onChange={handleChange}
          value={values.title}
        />
      </Grid>
      <Grid xs={12} item>
        <Label>Description</Label>
        <Input
          type="text"
          name="description"
          variant="outlined"
          onChange={handleChange}
          value={values.description}
        />
      </Grid>
    </Form>
  );
};

export default TodoModalBody;

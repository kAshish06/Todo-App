import React from "react";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import { Formik } from "formik";

import StyledButton from "../../common/components/Button";
import addCategoryQuery from "../query/addCategory";

import "./index.scss";

export const AddCategory = () => {
  const queryClient = useQueryClient();
  const addCategoryMutation = useMutation(addCategoryQuery, {
    onSuccess: () => {
      queryClient.invalidateQueries("categories");
    },
  });
  const onSubmit = (values) => {
    if (!values.name && !values.usedIn) return;
    const category = {
      name: values.name,
      usedIn: values.usedIn,
      desc: "",
    };
    addCategoryMutation.mutate(category);
  };
  return (
    <div className="add-category-container">
      <Formik initialValues={{ name: "", usedIn: "" }}>
        {({ values, handleChange, resetForm }) => {
          return (
            <Paper className="category-form-container">
              <div className="input-box-container">
                <InputLabel id="category-name-label">Category Name</InputLabel>
                <TextField
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={values.name}
                  className="name-input"
                  size="small"
                />
              </div>
              <div className="input-box-container">
                <InputLabel id="used-in-label">Used In</InputLabel>
                <Select
                  labelId="used-in-label"
                  name="usedIn"
                  value={values.usedIn}
                  onChange={handleChange}
                  className="used-in-input"
                  size="small"
                >
                  <MenuItem value="">Options</MenuItem>
                  <MenuItem value="todos">Todos</MenuItem>
                  <MenuItem value="expanses">Expanses</MenuItem>
                </Select>
              </div>
              <div className="action-button-container">
                <StyledButton
                  variant="contained"
                  disableElevation
                  color="secondary"
                  className="action-button"
                  aria-label="discard category"
                  onClick={resetForm}
                >
                  Discard
                </StyledButton>
                <StyledButton
                  variant="contained"
                  disableElevation
                  color="primary"
                  className="action-button"
                  aria-label="add category"
                  onClick={() => {
                    onSubmit(values);
                    resetForm();
                  }}
                  disabled={!values.name && !values.usedIn}
                >
                  Add
                </StyledButton>
              </div>
            </Paper>
          );
        }}
      </Formik>
    </div>
  );
};

export default AddCategory;

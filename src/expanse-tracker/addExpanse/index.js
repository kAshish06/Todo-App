import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import { Formik } from "formik";

import AddIcon from "../../icons/AddIcon";
import { AddExpanse as addExpanse } from "../actionCreators/addExpanseActionCreators";
import { getExpanses } from "../actionCreators/getExpansesActionCreators";

import "./index.scss";

export const AddExpanse = () => {
  const [addExpanseFormOpen, setAddExpanseFormOpen] = useState(false);
  const dispatch = useDispatch();
  const handleAddClick = (handleSubmit) => {
    if (!addExpanseFormOpen) {
      setAddExpanseFormOpen(true);
      return;
    }
    setAddExpanseFormOpen(false);
    handleSubmit();
  };
  const onSubmit = (values) => {
    const expanse = { title: values.title, amount: Number(values.amount) };
    dispatch(addExpanse(expanse)).then(() => {
      dispatch(getExpanses());
    });
  };
  return (
    <div className="add-expanse-container">
      <Formik initialValues={{ title: "", amount: "" }} onSubmit={onSubmit}>
        {({ values, handleChange, handleSubmit }) => {
          return (
            <Paper className="form-container">
              {addExpanseFormOpen && (
                <div className="input-box-container">
                  <InputBase
                    placeholder="Expanse Item"
                    type="text"
                    name="title"
                    onChange={handleChange}
                    value={values.title}
                    className="title-input"
                  />
                  <InputBase
                    placeholder="Amount"
                    type="text"
                    name="amount"
                    onChange={handleChange}
                    value={values.amount}
                    className="amount-input"
                  />
                </div>
              )}
              <IconButton
                color="primary"
                className="icon-button"
                aria-label="add expanse"
                onClick={() => handleAddClick(handleSubmit)}
              >
                <AddIcon width="36" height="36" />
              </IconButton>
            </Paper>
          );
        }}
      </Formik>
    </div>
  );
};

export default AddExpanse;

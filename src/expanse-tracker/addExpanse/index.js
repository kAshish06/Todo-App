import React from "react";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import { Formik } from "formik";

import AddIcon from "../../icons/AddIcon";
import { CategorySelect } from "../categorySelect";

import addExpanseQuery from "../query/addExpanses";
import getCategoriesQuery from "../query/getCategories";

import "./index.scss";

export const AddExpanse = () => {
  const { isLoading: isCategoriesLoading, data: categoriesData } = useQuery(
    ["categories"],
    getCategoriesQuery
  );
  const queryClient = useQueryClient();
  const addExpanseMutation = useMutation(addExpanseQuery, {
    onSuccess: () => {
      queryClient.invalidateQueries("expanses");
    },
  });
  const onSubmit = (values) => {
    if (!values.tittle && !values.amount) {
      return;
    }
    const expanse = {
      title: values.title,
      amount: Number(values.amount),
      category: values.category,
    };
    addExpanseMutation.mutate(expanse);
  };
  return (
    <div className="add-expanse-container">
      <Formik
        initialValues={{ title: "", amount: "", category: "" }}
        onSubmit={onSubmit}
      >
        {({ values, handleChange, resetForm }) => {
          return (
            <Paper className="form-container">
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
                {!isCategoriesLoading && (
                  <CategorySelect
                    initialValue={values.category}
                    categories={categoriesData.categories}
                    handleCategorySubmit={(e) => handleChange(e)}
                    className="category"
                  />
                )}
              </div>
              <IconButton
                color="primary"
                className="icon-button"
                aria-label="add expanse"
                onClick={() => {
                  onSubmit(values);
                  resetForm();
                }}
                disabled={!values.title && !values.amount}
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

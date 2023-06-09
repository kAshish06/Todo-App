import React, { useState } from "react";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import { DateTime } from "luxon";

import DeleteIcon from "../../icons/DeleteIcon";
import { CategorySelect } from "../categorySelect";
import getExpansesQuery from "../query/getExpanses";
import { deleteExpanseQuery } from "../query/deleteExpanse";
import { updateExpanseQuery } from "../query/updateExpanse";
import { getCategoriesQuery } from "../query/getCategories";
import { unpackSnakeCase } from "../../utils/commonUtils";

import "./index.scss";

export const ExpanseList = () => {
  const { isLoading: isExpanseLoading, data: expansesData } = useQuery(
    ["expanses"],
    getExpansesQuery
  );
  const { isLoading: isCategoriesLoading, data: categoriesData } = useQuery(
    ["categories"],
    getCategoriesQuery
  );
  const queryClient = useQueryClient();
  const deleteExapnseMutation = useMutation(deleteExpanseQuery, {
    onSuccess: () => {
      queryClient.invalidateQueries("expanses");
    },
  });
  const updateExpanseMutation = useMutation(updateExpanseQuery, {
    onSuccess: () => {
      queryClient.invalidateQueries("expanses");
    },
  });
  const handleCategorySubmit = (id, e) => {
    console.log(e);
    updateExpanseMutation.mutate({ id, payload: { category: e.target.value } });
  };

  const columns = [
    { field: "title", headerName: "Ttile", flex: 4 },
    {
      field: "category",
      headerName: "Category",
      editable: true,
      valueFormatter: ({ value }) => {
        return unpackSnakeCase(value);
      },
      renderEditCell: ({ value, row }) => {
        if (!isCategoriesLoading) {
          return (
            <CategorySelect
              initialValue={value}
              categories={categoriesData.categories}
              handleCategorySubmit={(e) => handleCategorySubmit(row._id, e)}
            />
          );
        } else {
          return "";
        }
      },
      flex: 3,
    },
    { field: "amount", headerName: "Amount", flex: 2 },
    {
      field: "expanseDate",
      headerName: "Date",
      valueGetter: ({ value }) => {
        return DateTime.fromISO(value).toFormat("dd LLL yyyy");
      },
      flex: 3,
      editable: true,
    },
    {
      field: "",
      headerName: "Actions",
      renderCell: ({ row }) => {
        return (
          <IconButton
            key={row._id}
            aria-label="Delete expanse"
            onClick={() => {
              deleteExapnseMutation.mutate(row._id);
            }}
          >
            <DeleteIcon />
          </IconButton>
        );
      },
      flex: 1,
    },
  ];

  return (
    <Paper className="expanse-list-container">
      {!isExpanseLoading && (
        <DataGrid
          rows={expansesData.expanses}
          columns={columns}
          getRowId={(row) => row._id}
        />
      )}
    </Paper>
  );
};

export default ExpanseList;

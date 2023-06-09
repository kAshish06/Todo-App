import React from "react";

import { useQuery } from "@tanstack/react-query";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

import getCategoriesQuery from "../query/getCategories";
import "./index.scss";

export const CategoryList = () => {
  const { isLoading, data } = useQuery(["categories"], getCategoriesQuery);
  const columns = [
    {
      field: "name",
      headerName: "Name",
      flex: 1,
    },
    {
      field: "usedIn",
      headerName: "Used In",
      flex: 1,
      //   valueGetter: ({ value }) => value.join(","),
    },
  ];
  return (
    <Paper className="category-list-container">
      {!isLoading && (
        <DataGrid
          rows={data.categories}
          columns={columns}
          getRowId={(row) => row._id}
        />
      )}
    </Paper>
  );
};

import React from "react";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import { DateTime } from "luxon";

import DeleteIcon from "../../icons/DeleteIcon";
import getExpansesQuery from "../query/getExpanses";
import { deleteExpanseQuery } from "../query/deleteExpanse";

import "./index.scss";

export const ExpanseList = () => {
  const queryClient = useQueryClient();
  const deleteExapnseMutation = useMutation(deleteExpanseQuery, {
    onSuccess: () => {
      queryClient.invalidateQueries("expanses");
    },
  });

  const columns = [
    { field: "title", headerName: "Ttile", flex: 5 },
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
      flex: 2,
    },
  ];
  const { isLoading, data } = useQuery(["expanses"], getExpansesQuery);

  return (
    <Paper className="expanse-list-container">
      {!isLoading && (
        <DataGrid
          rows={data.expanses}
          columns={columns}
          getRowId={(row) => row._id}
        />
      )}
    </Paper>
  );
};

export default ExpanseList;

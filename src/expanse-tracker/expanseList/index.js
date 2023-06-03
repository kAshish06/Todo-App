import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { DateTime } from "luxon";

import { getExpanses } from "../actionCreators/getExpansesActionCreators";

import "./index.scss";

export const ExpanseList = () => {
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
  ];
  const expanses = useSelector((state) => state.expansesSlice.expanses);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getExpanses()).then(() => {});
  }, []);

  return (
    <Paper className="expanse-list-container">
      <DataGrid rows={expanses} columns={columns} getRowId={(row) => row._id} />
    </Paper>
  );
};

export default ExpanseList;

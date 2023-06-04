import React from "react";

import { useQuery } from "@tanstack/react-query";

import Paper from "@mui/material/Paper";

import getExpansesQuery from "../query/getExpanses";

import "./index.scss";

export const ExpanseSummary = () => {
  const { isLoading, data } = useQuery(["expanses"], getExpansesQuery);
  let totalExpanses = 0;
  let last30DaysExpanses = 0;
  const currentDate = new Date();
  if (!isLoading) {
    data.expanses.forEach((expanse) => {
      const amount = expanse.amount;
      totalExpanses += Number(amount);
      const expanseDate = new Date(expanse.expanseDate);
      const diffDays = (currentDate - expanseDate) / (1000 * 60 * 60 * 24);
      if (diffDays < 30) {
        last30DaysExpanses += Number(amount);
      }
    });
  }
  return (
    <div className="expanse-summary-container">
      <Paper className="summary-card">
        <div className="summary-item-container">
          <div className="value">{totalExpanses}</div>
          <div className="label">Total expanses</div>
        </div>
      </Paper>
      <Paper className="summary-card">
        <div className="summary-item-container">
          <div className="value">{last30DaysExpanses}</div>
          <div className="label">Last 30 days</div>
        </div>
      </Paper>
    </div>
  );
};

export default ExpanseSummary;

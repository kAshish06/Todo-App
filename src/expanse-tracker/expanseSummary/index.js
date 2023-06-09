import React from "react";

import { useQuery } from "@tanstack/react-query";

import Paper from "@mui/material/Paper";

import getExpansesQuery from "../query/getExpanses";
import { unpackSnakeCase } from "../../utils/commonUtils";

import "./index.scss";

export const ExpanseSummary = () => {
  const { isLoading, data } = useQuery(["expanses"], getExpansesQuery);
  let totalExpanses = 0;
  let last30DaysExpanses = 0;
  const currentDate = new Date();
  const categoryWiseData = {};
  if (!isLoading) {
    data.expanses.forEach((expanse) => {
      const amount = expanse.amount;
      totalExpanses += Number(amount);
      const expanseDate = new Date(expanse.expanseDate);
      const diffDays = (currentDate - expanseDate) / (1000 * 60 * 60 * 24);
      if (diffDays < 30) {
        last30DaysExpanses += Number(amount);
      }
      if (categoryWiseData[expanse.category]) {
        categoryWiseData[expanse.category] += Number(expanse.amount);
      } else {
        categoryWiseData[expanse.category] = Number(expanse.amount);
      }
    });
  }

  return (
    <div>
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
      <div className="expanse-summary-container">
        <Paper className="summary-card">
          {Object.keys(categoryWiseData).map((category) => {
            return (
              <div className="category-wise-summary-container" key={category}>
                <div className="value">{`${categoryWiseData[category]}`}</div>
                <div className="label">{`${unpackSnakeCase(category)}`}</div>
              </div>
            );
          })}
        </Paper>
      </div>
    </div>
  );
};

export default ExpanseSummary;

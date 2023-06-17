import React from "react";

import { useQuery } from "@tanstack/react-query";

import Paper from "@mui/material/Paper";

import { DateTime } from "luxon";

import getExpansesQuery from "../query/getExpanses";
import { unpackSnakeCase } from "../../utils/commonUtils";

import "./index.scss";

export const ExpanseSummary = () => {
  const { isLoading, data } = useQuery(["expanses"], getExpansesQuery);
  let totalExpanses = 0;
  let last30DaysExpanses = 0;
  const currentDate = DateTime.now();
  const startDateOfCurrentMonth = DateTime.fromObject({
    year: currentDate.year,
    month: currentDate.month,
    day: 1,
  });
  const categoryWiseData = {};
  if (!isLoading) {
    data.expanses.forEach((expanse) => {
      const amount = expanse.amount;
      totalExpanses += Number(amount);
      const expanseDate = DateTime.fromISO(expanse.expanseDate);

      const diffInMonths = expanseDate
        .diff(startDateOfCurrentMonth, "months")
        .toObject()?.months;
      if (diffInMonths > 0 && diffInMonths < 1) {
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
        <Paper className="category-wise-summary-card">
          {Object.keys(categoryWiseData).map((category) => {
            return (
              <div className="category-wise-summary" key={category}>
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

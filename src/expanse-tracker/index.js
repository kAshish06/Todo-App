import React from "react";

import AddExpanse from "./addExpanse";
import ExpanseList from "./expanseList";
import ExpanseSummary from "./expanseSummary";

import "./index.scss";

export const ExpanseTrackerWrapper = () => {
  return (
    <div className="expanse-tracker-container">
      <div className="expanse-summary-action-container">
        <ExpanseSummary />
        <AddExpanse />
      </div>
      <ExpanseList />
    </div>
  );
};

export default ExpanseTrackerWrapper;

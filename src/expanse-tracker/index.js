import React from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AddExpanse from "./addExpanse";
import ExpanseList from "./expanseList";
import ExpanseSummary from "./expanseSummary";

import "./index.scss";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

export const ExpanseTrackerWrapper = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="expanse-tracker-container">
        <div className="expanse-summary-action-container">
          <ExpanseSummary />
          <AddExpanse />
        </div>
        <ExpanseList />
      </div>
    </QueryClientProvider>
  );
};

export default ExpanseTrackerWrapper;

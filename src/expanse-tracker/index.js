import React, { useState } from "react";

import { Outlet, useNavigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Paper from "@mui/material/Paper";

import AddExpanse from "./addExpanse";

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
  const [selectedTab, setSelectedTab] = useState("stats");
  const navigate = useNavigate();
  const handleTabClick = (_, newValue) => {
    navigate(newValue);
    setSelectedTab(newValue);
  };
  return (
    <QueryClientProvider client={queryClient}>
      <div className="expanse-tracker-container">
        <div className="expanse-summary-action-container">
          <AddExpanse />
          <Paper>
            <Tabs
              value={selectedTab}
              onChange={handleTabClick}
              textColor="secondary"
              indicatorColor="secondary"
            >
              <Tab value="stats" label="Stats" />
              <Tab value="list" label="List" />
            </Tabs>
            <Outlet />
          </Paper>
        </div>
      </div>
    </QueryClientProvider>
  );
};

export default ExpanseTrackerWrapper;

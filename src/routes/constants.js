import React from "react";

import Welcome from "../welcome/Welcome";
import TodoAppWrapper from "../todos";
import ExpanseTrackerWrapper from "../expanse-tracker";
import ExpanseList from "../expanse-tracker/expanseList";
import ExpanseSummary from "../expanse-tracker/expanseSummary";
import SettingsWrapper from "../Settings";
import CategoriesWrapper from "../categories";

export const RoutePathComponentMap = {
  "/": {
    component: <Welcome />,
    welcomeCardLabel: "Welcome",
    leftMenuLabel: "Welcome",
    visibleOnWelcome: false,
    visibleOnLeftMenu: true,
    titleBarLabel: "",
  },
  "/todoapp": {
    component: <TodoAppWrapper />,
    welcomeCardLabel: "Todos",
    leftMenuLabel: "Todos",
    visibleOnWelcome: true,
    visibleOnLeftMenu: true,
    titleBarLabel: "Todos",
  },
  "/expansetracker": {
    component: <ExpanseTrackerWrapper />,
    welcomeCardLabel: "Expanse Tracker",
    leftMenuLabel: "Expanse Tracker",
    visibleOnWelcome: true,
    visibleOnLeftMenu: true,
    titleBarLabel: "Expanse Tracker",
    children: {
      "/": {
        component: <ExpanseSummary />,
      },
      stats: {
        component: <ExpanseSummary />,
      },
      list: {
        component: <ExpanseList />,
      },
    },
  },
  "/settings": {
    component: <SettingsWrapper />,
    welcomeCardLabel: "Setting",
    leftMenuLabel: "Settings",
    visibleOnWelcome: true,
    visibleOnLeftMenu: true,
    titleBarLabel: "Settings",
  },
  "/categories": {
    component: <CategoriesWrapper />,
    welcomeCardLabel: "Categories",
    leftMenuLabel: "Categories",
    visibleOnLeftMenu: true,
    visibleOnWelcome: true,
    titleBarLabel: "Categories",
  },
};

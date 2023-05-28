import React from "react";

import Welcome from "../welcome/Welcome";
import TodoAppWrapper from "../todos";
import ExpanseTrackerWrapper from "../expanse-tracker";
import SettingsWrapper from "../Settings";

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
  },
  "/settings": {
    component: <SettingsWrapper />,
    welcomeCardLabel: "Setting",
    leftMenuLabel: "Settings",
    visibleOnWelcome: true,
    visibleOnLeftMenu: true,
    titleBarLabel: "Settings",
  },
};

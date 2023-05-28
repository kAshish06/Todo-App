import React from "react";

import { Routes, Route } from "react-router-dom";

import { RoutePathComponentMap } from "./constants";

export const AppRoutes = () => {
  return (
    <Routes>
      {Object.keys(RoutePathComponentMap).map((path) => {
        return (
          <Route
            path={path}
            element={RoutePathComponentMap[path].component}
            key={path}
          />
        );
      })}
    </Routes>
  );
};
export default AppRoutes;

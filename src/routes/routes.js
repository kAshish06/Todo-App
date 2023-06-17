import React from "react";

import { Routes, Route } from "react-router-dom";

import { RoutePathComponentMap } from "./constants";

export const AppRoutes = () => {
  const routes = (
    <Routes>
      {Object.keys(RoutePathComponentMap).map((path) => {
        return (
          <Route
            path={path}
            element={RoutePathComponentMap[path].component}
            key={path}
          >
            {RoutePathComponentMap[path].children
              ? Object.keys(RoutePathComponentMap[path].children).map(
                  (childPath, index) => {
                    if (childPath === "/") {
                      return (
                        <Route
                          index
                          element={
                            RoutePathComponentMap[path].children[childPath]
                              .component
                          }
                          key={`${path}-${index}`}
                        />
                      );
                    } else {
                      return (
                        <Route
                          path={childPath}
                          element={
                            RoutePathComponentMap[path].children[childPath]
                              .component
                          }
                          key={`${path}-${index}`}
                        />
                      );
                    }
                  }
                )
              : null}
          </Route>
        );
      })}
    </Routes>
  );
  return routes;
};
export default AppRoutes;

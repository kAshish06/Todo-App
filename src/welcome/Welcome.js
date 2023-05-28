import React from "react";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { RoutePathComponentMap } from "../routes/constants";

import "./Welcome.scss";

export const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <div>Welcome to Utilities</div>
      <div className="welcome-app-cards-container">
        {Object.keys(RoutePathComponentMap)
          .filter((path) => RoutePathComponentMap[path].visibleOnWelcome)
          .map((path) => {
            return (
              <Box
                className="card-container"
                onClick={() => navigate(path)}
                key={path}
              >
                <Card>
                  <CardContent>
                    {RoutePathComponentMap[path].welcomeCardLabel}
                  </CardContent>
                </Card>
              </Box>
            );
          })}
      </div>
    </div>
  );
};
export default Welcome;

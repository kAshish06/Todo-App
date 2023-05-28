import React from "react";
import { useNavigate } from "react-router-dom";

import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { RoutePathComponentMap } from "../routes/constants";

import "./LeftMenu.scss";

const LeftMenu = ({
  anchor,
  open = false,
  onOpen = () => {},
  onClose = () => {},
}) => {
  const navigate = useNavigate();
  const handleMenuItemClick = (path) => {
    navigate(path);
    onClose();
  };
  return (
    <SwipeableDrawer
      anchor={anchor}
      open={open}
      onClose={onClose}
      onOpen={onOpen}
    >
      <div className="left-menu-container">
        {Object.keys(RoutePathComponentMap)
          .filter((path) => RoutePathComponentMap[path].visibleOnLeftMenu)
          .map((path) => {
            return (
              <Box
                className="menu-option-container"
                onClick={() => {
                  handleMenuItemClick(path);
                }}
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
    </SwipeableDrawer>
  );
};

export default LeftMenu;

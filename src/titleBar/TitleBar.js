import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import MenuIcon from "../icons/MenuIcon";
import LeftMenu from "../LeftMenu/LeftMenu";
import { RoutePathComponentMap } from "../routes/constants";

import "./TitleBar.scss";

const TitleBar = () => {
  const [leftDrawerOpen, setLeftDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div position="static" className="app-bar-container">
      <IconButton
        edge="start"
        className="menu-button"
        color="inherit"
        aria-label="menu"
        onClick={() => {
          setLeftDrawerOpen(true);
        }}
      >
        <MenuIcon width="32" height="32" />
      </IconButton>
      <Typography
        variant="h6"
        noWrap
        onClick={() => navigate("/")}
        className="app-title"
      >
        {`Utilities${
          RoutePathComponentMap[pathname].titleBarLabel &&
          ` - ${RoutePathComponentMap[pathname].titleBarLabel}`
        }`}
      </Typography>
      <LeftMenu
        anchor="left"
        open={leftDrawerOpen}
        onOpen={() => setLeftDrawerOpen(true)}
        onClose={() => setLeftDrawerOpen(false)}
      />
    </div>
  );
};

export default TitleBar;

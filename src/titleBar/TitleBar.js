import React from "react";

import { css, jsx } from "@emotion/react";

import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "../icons/MenuIcon";
import { useStyle } from "./styles";

/** @jsx jsx */

const TitleBar = () => {
  const classes = useStyle();
  return (
    <div position="static" className={classes.appBarContainer}>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="menu"
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" noWrap>
        To-do App
      </Typography>
    </div>
  );
};

export default TitleBar;

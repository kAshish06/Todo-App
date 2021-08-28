import React from "react";

import { css, jsx } from "@emotion/react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
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

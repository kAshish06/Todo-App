import React from "react";

import { css, jsx } from "@emotion/react";

import { StyleIconButton } from "../styledMuiComponents/StyledIconButton";
import Fade from "@mui/material/Fade";
import "./CardToolbar.scss";

/** @jsx jsx */

const CardToolbar = ({ toolbarItems = [] }) => {
  return (
    <Fade in={true} timeout={500}>
      <div className="card-toolbar">
        {toolbarItems.map((toolbarItem, index) => (
          <StyleIconButton
            key={index}
            aria-label="Edit todo"
            onClick={toolbarItem.onClickHandler}
          >
            <toolbarItem.icon color="#007fff" />
          </StyleIconButton>
        ))}
      </div>
    </Fade>
  );
};

export default CardToolbar;

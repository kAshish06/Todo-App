import React from "react";

import IconButton from "@mui/material/IconButton";
import Fade from "@mui/material/Fade";
import "./CardToolbar.scss";

const CardToolbar = ({ toolbarItems = [] }) => {
  return (
    <Fade in={true} timeout={500}>
      <div className="card-toolbar">
        {toolbarItems.map((toolbarItem, index) => (
          <IconButton
            key={index}
            aria-label="Edit todo"
            onClick={toolbarItem.onClickHandler}
          >
            <toolbarItem.icon color="#007fff" />
          </IconButton>
        ))}
      </div>
    </Fade>
  );
};

export default CardToolbar;

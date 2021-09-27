import React from "react";

import { ICON_WIDTH, ICON_HEIGHT } from "../utils/constants";

const MenuIcon = ({ width = ICON_WIDTH, height = ICON_HEIGHT, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill={color ? color : "currentColor"}
    viewBox="0 0 16 16"
  >
    <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
  </svg>
);

export default MenuIcon;

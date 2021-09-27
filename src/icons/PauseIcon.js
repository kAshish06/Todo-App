import React from "react";

import { ICON_WIDTH, ICON_HEIGHT } from "../utils/constants";

const PauseIcon = ({ width = ICON_WIDTH, height = ICON_HEIGHT, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill={color ? color : "currentColor"}
    viewBox="0 0 16 16"
  >
    <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z" />
  </svg>
);

export default PauseIcon;

import React from "react";

import { ICON_WIDTH, ICON_HEIGHT } from "../utils/constants";

const AddIcon = ({ width = ICON_WIDTH, height = ICON_HEIGHT, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill={color ? color : "currentColor"}
    viewBox="0 0 16 16"
  >
    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
  </svg>
);

export default AddIcon;

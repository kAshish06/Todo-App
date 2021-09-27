import React from "react";

import { ICON_WIDTH, ICON_HEIGHT } from "../utils/constants";

const PlayIcon = ({
  width = ICON_WIDTH,
  height = ICON_HEIGHT,
  filled = false,
  color,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill={color ? color : "currentColor"}
    viewBox="0 0 16 16"
  >
    {filled ? (
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
    ) : (
      <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" />
    )}
  </svg>
);

export default PlayIcon;

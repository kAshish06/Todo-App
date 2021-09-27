import React from "react";
import { css, jsx } from "@emotion/react";
import InputLabel from "@mui/material/InputLabel";

/** @jsx jsx */

const Label = (props) => {
  return (
    <InputLabel
      css={css`
        padding: 5px 10px;
        marging: 5px 10px;
      `}
    >
      {props.children}
    </InputLabel>
  );
};

export default Label;

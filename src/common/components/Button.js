import React from "react";
import { css, jsx } from "@emotion/react";
import Button from "@mui/material/Button";

/** @jsx jsx */

const StyledButton = (props) => {
  return (
    <Button
      css={css`
        min-width: 100px;
        text-transform: none;
      `}
      {...props}
    >
      {props.children}
    </Button>
  );
};

export default StyledButton;

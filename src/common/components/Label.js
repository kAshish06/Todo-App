import React from "react";
import { css, jsx } from "@emotion/react";
import InputLabel from "@material-ui/core/InputLabel";

/** @jsx jsx */

const Label = (props) => {
  return (
    <InputLabel
      css={css`
        padding: 10px 5px;
      `}
    >
      {props.children}
    </InputLabel>
  );
};

export default Label;

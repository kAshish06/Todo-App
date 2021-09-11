import React from "react";
import { css, jsx } from "@emotion/react";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
/** @jsx jsx */
const StyledTextareaAutosize = (props) => {
  return (
    <TextareaAutosize
      css={css`
        width: 100%;
        border: 1px solid #ccc;
        padding: 5px;
        /* .MuiOutlinedInput-input {
          padding: 10px 5px;
        }
        .MuiOutlinedInput-root {
          border-radius: 0;
        } */
      `}
      {...props}
    />
  );
};

export default StyledTextareaAutosize;

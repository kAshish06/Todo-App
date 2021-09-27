import React from "react";
import { css, jsx } from "@emotion/react";
import TextField from "@mui/material/TextField";

/** @jsx jsx */

const Input = (props) => {
  return (
    <TextField
      css={css`
        width: 100%;
        .MuiOutlinedInput-input {
          padding: 10px 5px;
        }
        .MuiOutlinedInput-root {
          border-radius: 0;
        }
      `}
      {...props}
    />
  );
};

export default Input;

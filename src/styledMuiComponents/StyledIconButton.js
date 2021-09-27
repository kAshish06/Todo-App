import { withStyles } from "@mui/styles";

import IconButton from "@mui/material/IconButton";

export const StyleIconButton = withStyles((theme) => ({
  root: {
    padding: "5px !important",
    margin: "2px 3px !important",
  },
}))(IconButton);

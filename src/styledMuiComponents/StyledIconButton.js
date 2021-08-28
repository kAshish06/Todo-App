import { withStyles } from "@material-ui/core/styles";

import IconButton from "@material-ui/core/IconButton";

export const StyleIconButton = withStyles((theme) => ({
  root: {
    padding: "7px",
  },
}))(IconButton);

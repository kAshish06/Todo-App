import { createMuiTheme } from "@material-ui/core/styles";
import { blue, pink, green, orange } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: blue[300],
      main: blue[600],
      dark: blue[900],
      contrastText: "#fff",
    },
    secondary: {
      light: pink[300],
      main: pink[500],
      light: pink[900],
      contrastText: "#fff",
    },
  },
  status: {
    success: green[400],
    danger: orange[900],
  },
});

export default theme;

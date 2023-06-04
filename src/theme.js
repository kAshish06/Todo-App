import { createTheme } from "@mui/material/styles";
import { blue, pink, green, orange } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      light: blue[300],
      main: "#007fff",
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

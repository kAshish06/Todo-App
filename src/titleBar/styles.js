import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(1),
  },
  appBarContainer: {
    display: "flex",
    flexGrow: 1,
    alignItems: "center",
    marginBottom: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    boxShadow: "none",
    maxHeight: "48px",
    paddingLeft: "20px",
  },
}));

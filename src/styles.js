import { makeStyles } from "@mui/styles";
// import { createTheme, ThemeProvider } from "@mui/material/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "gray", //theme.palette.background.paper,
    padding: "10px", //theme.spacing(8, 0, 6),
  },
  icon: {
    marginRight: "20px",
  },
  buttons: { marginTop: "40px" },
  cardGrid: {
    padding: "20px 0 ",
  },
  card: { height: "100%", display: "flex", flexDirection: "column" },
  cardMedia: { paddingTop: "56.25%" },
  cardContent: { flexGrow: 1 },
  footer: { backgroundColor: "gray", padding: "50px 0" },
}));

export default useStyles;

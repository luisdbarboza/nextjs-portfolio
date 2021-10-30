import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
} from "@material-ui/core";

let theme = createTheme({
  palette: {
    primary: {
      main: "#0A1929",
    },
    secondary: {
      main: "#223F4D",
    },
  },
  typography: {
    fontFamily: ["Roboto", "Fira Sans"],
  },
});

const ThemeProvider = ({ children }) => {
  return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>;
};

export default ThemeProvider;

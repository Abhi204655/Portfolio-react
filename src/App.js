import "./App.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#131313",
    },
    secondary: {
      main: "#ecc94b",
    },
    white: {
      main: "#FFFFFF",
    },
    gray: {
      main: "#828282",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">hello</div>
    </ThemeProvider>
  );
}

export default App;

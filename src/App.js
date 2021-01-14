import "./App.css";
import { Navbar } from "./components";
import CssBaseline from "@material-ui/core/CssBaseline";

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
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <div className="main">
          <div className="container">
            <Navbar />
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;

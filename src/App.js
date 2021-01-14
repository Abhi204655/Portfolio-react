import "./App.css";
import { Navbar, Footer } from "./components";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Screens/Home";
import Experience from "./Screens/Experience";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import ProjectScreen from "./Screens/ProjectScreen";

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
    lightBlack: {
      main: "#181818",
    },
  },
  // breakpoints: {
  //   values: {
  //     md: 1100,
  //   },
  // },
});

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Router>
          <div className="main">
            <div className="container">
              <Navbar />
              <Switch>
                <Route exact path="/" render={() => <Home />} />
                <Route
                  exact
                  path="/projects"
                  render={() => <ProjectScreen />}
                />
                <Route exact path="/experience" render={() => <Experience />} />
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;

import "./App.css";
import { Navbar, Footer } from "./components";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Screens/Home";
import Experience from "./Screens/Experience";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

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
    <ParallaxProvider>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Router>
          <div className="main">
            <div className="wrapper">
              <Navbar />
              <div className="container">
                <Switch>
                  <Route exact path="/" render={() => <Home />} />
                  <Route
                    exact
                    path="/projects"
                    render={() => <ProjectScreen />}
                  />
                  <Route
                    exact
                    path="/experience"
                    render={() => <Experience />}
                  />
                </Switch>
              </div>
              <Footer />
            </div>
            <Parallax
              className="backdrop-shape"
              y={[-50, 20]}
              tagOuter="figure"
            ></Parallax>
            <Parallax
              className="backdrop-shape-3"
              y={[-50, 20]}
              tagOuter="figure"
            ></Parallax>
          </div>
        </Router>
      </ThemeProvider>
    </ParallaxProvider>
  );
}

export default App;

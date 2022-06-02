import React from "react";
import "./App.css";
import {
  makeStyles,
  CssBaseline,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core";

import { Routes, Route, HashRouter } from "react-router-dom";
import NavegatorBars from "../components/sidebarDropDown/NavegatorBars";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#333996",
      light: "#3c44b126",
    },
    secondary: {
      main: "#f83245",
      light: "#f8324526",
    },
    background: {
      default: "#f4f5fd",
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: "translateZ(0)",
      },
    },
  },
  props: {
    MuiIconButton: {
      disableRipple: true,
    },
  },
});

const useStyles = makeStyles({
  appMain: {
    // paddingLeft: "250px",
    width: "100%",
  },
});

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.appMain}>
        <>
          <HashRouter>
            <NavegatorBars />
            <Routes>
              {/* <Route exact path="/" element={<Login />} />
              <Route
                exact
                path="/DashboardCrentes"
                element={<DashboardCrentes />}
              />
              <Route
                exact
                path="/DashboardFinancas"
                element={<DashboardFinancas />}
              />
              <Route
                exact
                path="/DashboardAdmin"
                element={<DashboardAdmin />}
              />
              <Route exact path="/addCrente" element={<Crentes />} />
              <Route exact path="/addPresencas" element={<Presencas />} />
              <Route exact path="/financas" element={<Financas />} />
              <Route exact path="/liquidar" element={<Liquidar />} />
              <Route exact path="/ajuda" element={<Employees />} /> */}
            </Routes>
            {/* <Footer /> */}
          </HashRouter>
        </>
      </div>

      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;

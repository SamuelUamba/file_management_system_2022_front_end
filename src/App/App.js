import React from "react";
import "./App.css";
import {
  makeStyles,
  CssBaseline,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core";

import { Routes, Route, HashRouter } from "react-router-dom";

import Header from "../Header";
import Menu from "../Menu";
import AdminDashboard from "../AdminDashboard";
import Footer from "../Footer";

const useStyles = makeStyles({
  appMain: {
    // paddingLeft: "250px",
    width: "100%",
  },
});

function App() {
  return (
    <div class="wrapper">
      <Header />
      <Menu />
      <AdminDashboard />
      <Footer />
    </div>
  );
}

export default App;

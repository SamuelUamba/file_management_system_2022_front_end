import React from "react";
import "./App.css";
import {
  makeStyles,
  CssBaseline,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core";

import { Routes, Route, HashRouter } from "react-router-dom";

import Header from "../Navegations/Header";
import Menu from "../Navegations/Menu";
import AdminDashboard from "../dashboards/AdminDashboard";
import Registo from "../pages/notas/Registo";
import Footer from "../Navegations/Footer";
import Tabela_Dados from "../pages/notas/Tabela_Dados";

function App() {
  return (
    <ThemeProvider>
      <div class="wrapper">
        <>
          <HashRouter>
            <Header />
            <Menu />
            <Footer />
            <Routes>
              <Route exact path="/" element={<AdminDashboard />} />
              <Route exact path="/Notas/entrada" element={<Registo />} />
              <Route exact path="/Notas/dados" element={<Tabela_Dados />} />
            </Routes>
          </HashRouter>
        </>
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;

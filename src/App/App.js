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
import Footer from "../Navegations/Footer";

import AdminDashboard from "../dashboards/AdminDashboard";

import RegistoNota from "../pages/notas/entradas/Registo";
import RegistoSaida from "../pages/notas/saidas/Registo";
import Tabela_Dados_Entrada from "../pages/notas/entradas/Tabela_Dados_Entrada";
import Tabela_dados_Saidas from "../pages/notas/saidas/Tabela_Dados_Saidas";

import RegistoRequerimento from "../pages/requerimentos/entradas/Registo";
import Tabela_Dados_Entrada_Requerimentos from "../pages/requerimentos/entradas/Tabela_Dados_Entrada_Requerimentos";

import RegistoAudiencia from "../pages/audiencias/Registo";
import Agendar from "../pages/audiencias/Agendar";
import Tabela_Dados_audiencias from "../pages/audiencias/Tabela_Dados_audiencias";

import Configuracoes from "../pages/config/Configuracoes";
import Email from "../dashboards/Email";

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
              <Route exact path="/ajuda" element={<Email />} />
              {/* Notas de Envio */}
              <Route exact path="/Notas/entrada" element={<RegistoNota />} />
              <Route
                exact
                path="/Notas/dados/entradas"
                element={<Tabela_Dados_Entrada />}
              />
              <Route exact path="/Notas/saidas" element={<RegistoSaida />} />
              <Route
                exact
                path="/Notas/dados/saidas"
                element={<Tabela_dados_Saidas />}
              />

              {/* Requerimentos */}

              <Route
                exact
                path="/Requerimentos/entrada"
                element={<RegistoRequerimento />}
              />
              <Route
                exact
                path="/Requerimentos/dados/entradas"
                element={<Tabela_Dados_Entrada_Requerimentos />}
              />

              {/* Audiencias */}
              <Route exact path="/Audiencias" element={<RegistoAudiencia />} />
              <Route exact path="/Audiencias/agendar" element={<Agendar />} />
              <Route
                exact
                path="/Audiencias/dados"
                element={<Tabela_Dados_audiencias />}
              />
              {/* Configuracoes */}
              <Route exact path="/configuracoes" element={<Configuracoes />} />
            </Routes>
          </HashRouter>
        </>
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;

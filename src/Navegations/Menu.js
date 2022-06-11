import React, { Component } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import ArticleIcon from "@mui/icons-material/Article";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export default class Menu extends Component {
  render() {
    return (
      <div>
        {/* Main Sidebar Container */}
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
          {/* Brand Logo */}

          <a href="#" className="brand-link">
            <span className="brand-text font-weight-light">
              <strong>Mod.Gest. de Expediente</strong>
            </span>
          </a>
          {/* Sidebar */}
          <div className="sidebar">
            {/* Sidebar user panel (optional) */}
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
              <div className="image">
                <img
                  src="dist/img/user2-160x160.jpg"
                  className="img-circle elevation-2"
                  alt="User Image"
                />
              </div>
              <div className="info">
                <a href="#" className="d-block">
                  Usuário logado
                </a>
              </div>
            </div>
            {/* SidebarSearch Form */}
            <div className="form-inline">
              <div className="input-group" data-widget="sidebar-search">
                <input
                  className="form-control form-control-sidebar"
                  type="search"
                  placeholder="Pesquisar"
                  aria-label="Search"
                />
                <div className="input-group-append">
                  <button className="btn btn-sidebar">
                    <i className="fas fa-search fa-fw" />
                  </button>
                </div>
              </div>
            </div>
            {/* Sidebar Menu */}
            <nav className="mt-2">
              <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
              >
                <li className="nav-item menu-open">
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <a href="./#/" className="nav-link active">
                        {/* <i className="far fa-circle nav-icon" /> */}
                        <DashboardIcon fontSize="large" color="success" />
                        <p>Dashboard</p>
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <DocumentScannerIcon fontSize="large" />

                    <p>
                      Notas
                      <i className="fas fa-angle-left right" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <a href="/#/Notas/entrada" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <span className="badge badge-info right">+</span>
                        <p>Entrada</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/#/Notas/saida" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <span className="badge badge-danger right">-</span>
                        <p>Saida</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/#/Notas/dados" className="nav-link">
                        <BackupTableIcon />
                        <span className="badge badge-success right">.</span>
                        <p>Tabela de dados</p>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <ArticleIcon fontSize="large" color="primary" />
                    <p>
                      Requerimentos
                      <i className="fas fa-angle-left right" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <a href="/#/Requerimentos/entrada" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Entradas</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/#/Requerimentos/saida" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Saidas</p>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="/#/Tabelas" className="nav-link">
                    <BackupTableIcon fontSize="large" />
                    <p>
                      Tabelas de dados
                      <i className="fas fa-angle-left right" />
                    </p>
                  </a>
                </li>
                <li className="nav-header">Audiencias</li>
                <li className="nav-item">
                  <a href="/#/Audiencias" className="nav-link">
                    <CalendarMonthIcon fontSize="large" />
                    <p>
                      Marcar
                      <span className="badge badge-info right">2</span>
                    </p>
                  </a>
                </li>
              </ul>
            </nav>
            {/* /.sidebar-menu */}
          </div>
          {/* /.sidebar */}
        </aside>
      </div>
    );
  }
}

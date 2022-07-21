import React, { Component, useState, useEffect } from "react";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import ArticleIcon from "@mui/icons-material/Article";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export default function Header() {
  const [requerimentos, setRequerimentos] = useState(0);
  const [audiencias, setAudiencias] = useState(0);
  async function TotalRequerimentoPendentes() {
    let result = await fetch(
      "http://localhost:8000/api/getDados/TotalRequerimentosPendentes"
    );
    result = await result.json();
    setRequerimentos(result);
  }
  async function TotalAdienciasPendentes() {
    let result = await fetch(
      "http://localhost:8000/api/getDados/TotalAudienciasPendentes"
    );
    result = await result.json();
    setAudiencias(result);
  }
  useEffect(() => {
    TotalAdienciasPendentes();
    TotalRequerimentoPendentes();
  }, []);
  return (
    <div>
      {/* Navbar */}
      <nav className="main-header navbar navbar-expand navbar-dark">
        {/* Left navbar links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="pushmenu"
              href="#"
              role="button"
            >
              <i className="fas fa-bars" />
            </a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          {/* <li className="nav-item d-none d-sm-inline-block">
            <a href="/#/ajuda" className="nav-link">
              Ajuda
            </a>
          </li> */}
        </ul>
        {/* Right navbar links */}
        <ul className="navbar-nav ml-auto">
          {/* Notifications Dropdown Menu */}
          <li className="nav-item dropdown">
            <a className="nav-link" data-toggle="dropdown" href="#">
              <i className="far fa-bell fa-2X" />
              <span className="badge badge-danger navbar-badge">
                <strong>{audiencias + requerimentos}</strong>
              </span>
            </a>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              <span className="dropdown-item dropdown-header">
                <strong> {audiencias + requerimentos}</strong> Notificações
              </span>
              <div className="dropdown-divider" />
              <a href="#" className="dropdown-item">
                <CalendarMonthIcon fontSize="large" color="success" />{" "}
                <strong> {audiencias}</strong> Audiencias Pendentes
              </a>
              <div className="dropdown-divider" />
              <a href="#" className="dropdown-item">
                <ArticleIcon fontSize="large" color="primary" />
                <strong>{requerimentos}</strong> Requerimentos sem desfecho
              </a>
              <div className="dropdown-divider" />
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="fullscreen"
              href="#"
              role="button"
            >
              <i className="fas fa-expand-arrows-alt" />
            </a>
          </li>
        </ul>
      </nav>
      {/* /.navbar */}
    </div>
  );
}

import React, { Component, useState, useEffect } from "react";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import ArticleIcon from "@mui/icons-material/Article";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import GraficoCircular from "./PieChart";
import GraficoBarras from "./BarChart";

export default function AdminDashboard() {
  const [totalRequerimento, setTotalRequerimento] = useState(0);
  const [totalNotasEntrada, setTotalNotasEntrada] = useState(0);
  const [totalNotasSaidas, setTotalNotasSaidas] = useState(0);
  const [totalAudiencias, setTotalAudiencias] = useState(0);
  const [requerimentos, setRequerimentos] = useState(0);
  const [notasEntradas, setNotasEntradas] = useState(0);
  const [notasSaidas, setNotasSaidas] = useState(0);
  const [audiencias, setAudiencias] = useState(0);

  useEffect(() => {
    TotalAudiencias();
    TotalRequerimento();
    TotalNotasEntrada();
    TotalNotasSaidas();
  }, []);
  async function TotalRequerimento() {
    let result = await fetch(
      "http://localhost:8000/api/getDados/TotalRequerimento"
    );
    result = await result.json();
    setTotalRequerimento(result);
  }
  async function TotalNotasEntrada() {
    let result = await fetch(
      "http://localhost:8000/api/getDados/TotalNotasEntrada"
    );
    result = await result.json();
    setTotalNotasEntrada(result);
  }
  async function TotalNotasSaidas() {
    let result = await fetch(
      "http://localhost:8000/api/getDados/TotalNotasSaidas"
    );
    result = await result.json();
    setTotalNotasSaidas(result);
  }
  async function TotalAudiencias() {
    let result = await fetch(
      "http://localhost:8000/api/getDados/TotalAudiencias"
    );
    result = await result.json();
    setTotalAudiencias(result);
  }

  useEffect(() => {
    Audiencias();
    Requerimentos();
    NotasEntradas();
    NotasSaidas();
  }, []);
  async function Requerimentos() {
    let result = await fetch("http://localhost:8000/api/getRequerimento");
    result = await result.json();
    setRequerimentos(result);
  }
  async function NotasEntradas() {
    let result = await fetch("http://localhost:8000/api/getNotaEntrada");
    result = await result.json();
    setNotasEntradas(result);
  }
  async function NotasSaidas() {
    let result = await fetch("http://localhost:8000/api/getNotaSaida");
    result = await result.json();
    setNotasSaidas(result);
  }
  async function Audiencias() {
    let result = await fetch("http://localhost:8000/api/getDados/getAudiencia");
    result = await result.json();
    setAudiencias(result);
  }

  return (
    <div>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Dashboard</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Dashboard</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-sm-6 col-md-3">
                <div className="info-box">
                  <span className="info-box-icon bg-info elevation-1">
                    <DocumentScannerIcon fontSize="large" />
                  </span>
                  <div className="info-box-content">
                    <span className="info-box-text">
                      Cumulativo de Requerimentos
                    </span>
                    <span className="info-box-number">
                      <h2>{totalRequerimento}</h2>
                    </span>
                  </div>
                  {/* /.info-box-content */}
                </div>
                {/* /.info-box */}
              </div>
              {/* /.col */}
              <div className="col-12 col-sm-6 col-md-3">
                <div className="info-box mb-3">
                  <span className="info-box-icon bg-danger elevation-1">
                    <ArticleIcon fontSize="large" />
                  </span>
                  <div className="info-box-content">
                    <span className="info-box-text">
                      {" "}
                      Cumulativo de Notas-Entradas
                    </span>
                    <span className="info-box-number">
                      <h2>{totalNotasEntrada}</h2>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-3">
                <div className="info-box mb-3">
                  <span className="info-box-icon bg-warning elevation-1">
                    <ArticleIcon fontSize="large" />
                  </span>
                  <div className="info-box-content">
                    <span className="info-box-text">
                      {" "}
                      Cumulativo de Notas-Saidas
                    </span>
                    <span className="info-box-number">
                      <h2>{totalNotasSaidas}</h2>
                    </span>
                  </div>
                </div>
              </div>
              <div className="clearfix hidden-md-up" />
              <div className="col-12 col-sm-6 col-md-3">
                <div className="info-box mb-3">
                  <span className="info-box-icon bg-success elevation-1">
                    <CalendarMonthIcon fontSize="large" />
                  </span>
                  <div className="info-box-content">
                    <span className="info-box-text">
                      Cumulativo de Audiências
                    </span>
                    <span className="info-box-number">
                      <h2>{totalAudiencias}</h2>
                    </span>
                  </div>
                  {/* /.info-box-content */}
                </div>
                {/* /.info-box */}
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
            <div className="row">
              <div className="col-md-8">
                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title">
                      Dados Mensais de entrada de expedientes
                    </h5>
                    <div className="card-tools">
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="collapse"
                      >
                        <i className="fas fa-minus" />
                      </button>
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-tool dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          <i className="fas fa-wrench" />
                        </button>
                        <div
                          className="dropdown-menu dropdown-menu-right"
                          role="menu"
                        >
                          <a href="#" className="dropdown-item">
                            Action
                          </a>
                          <a href="#" className="dropdown-item">
                            Another action
                          </a>
                          <a href="#" className="dropdown-item">
                            Something else here
                          </a>
                          <a className="dropdown-divider" />
                          <a href="#" className="dropdown-item">
                            Separated link
                          </a>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="remove"
                      >
                        <i className="fas fa-times" />
                      </button>
                    </div>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-12">
                        <p className="text-center">
                          <strong>
                            Expedientes: Janeiro - Dezembro de 2022
                          </strong>
                        </p>
                        <div className="chart">
                          {/* Sales Chart Canvas */}
                          {/* <canvas
                            id="salesChart"
                            height={180}
                            style={{ height: 180 }}
                          /> */}
                          <GraficoBarras
                            requerimentos={requerimentos}
                            notasEntradas={notasEntradas}
                            notasSaidas={notasSaidas}
                            audiencias={audiencias}
                          />
                        </div>
                        {/* /.chart-responsive */}
                      </div>
                    </div>
                    {/* /.row */}
                  </div>
                  {/* ./card-body */}
                  {/* <div className="card-footer">
                    <div className="row">
                      <div className="col-sm-3 col-6">
                        <div className="description-block border-right">
                          <span className="description-percentage text-success">
                            <i className="fas fa-caret-up" /> 17%
                          </span>
                          <h5 className="description-header">$35,210.43</h5>
                          <span className="description-text">
                            TOTAL REVENUE
                          </span>
                        </div>
                        
                      </div>
                     
                      <div className="col-sm-3 col-6">
                        <div className="description-block border-right">
                          <span className="description-percentage text-warning">
                            <i className="fas fa-caret-left" /> 0%
                          </span>
                          <h5 className="description-header">$10,390.90</h5>
                          <span className="description-text">TOTAL COST</span>
                        </div>
                        
                      </div>
                      
                      <div className="col-sm-3 col-6">
                        <div className="description-block border-right">
                          <span className="description-percentage text-success">
                            <i className="fas fa-caret-up" /> 20%
                          </span>
                          <h5 className="description-header">$24,813.53</h5>
                          <span className="description-text">TOTAL PROFIT</span>
                        </div>
                       
                      </div>
                     
                      <div className="col-sm-3 col-6">
                        <div className="description-block">
                          <span className="description-percentage text-danger">
                            <i className="fas fa-caret-down" /> 18%
                          </span>
                          <h5 className="description-header">1200</h5>
                          <span className="description-text">
                            GOAL COMPLETIONS
                          </span>
                        </div>
                       
                      </div>
                    </div>
                 
                  </div> */}
                  {/* /.card-footer */}
                </div>
                {/* /.card */}
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">
                      Dados Agregados dos expedientes
                    </h3>
                    <div className="card-tools">
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="collapse"
                      >
                        <i className="fas fa-minus" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="remove"
                      >
                        <i className="fas fa-times" />
                      </button>
                    </div>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="chart-responsive">
                          {/* <canvas id="pieChart" height={150} /> */}

                          <GraficoCircular
                            totalRequerimento={totalRequerimento}
                            totalNotasEntrada={totalNotasEntrada}
                            totalNotasSaidas={totalNotasSaidas}
                            totalAudiencias={totalAudiencias}
                          />
                        </div>
                        {/* ./chart-responsive */}
                      </div>
                    </div>
                    {/* /.row */}
                  </div>
                  {/* /.card-body */}
                  <div className="card-footer p-0">
                    <ul className="nav nav-pills flex-column">
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          Requerimentos
                          <span className="float-right text-primary ">
                            {" "}
                            {Math.round(
                              (totalRequerimento /
                                (totalAudiencias +
                                  totalNotasSaidas +
                                  totalNotasEntrada +
                                  totalRequerimento)) *
                                100
                            )}{" "}
                            %
                          </span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          Notas de entrada
                          <span className="float-right  text-danger">
                            {" "}
                            {Math.round(
                              (totalNotasEntrada /
                                (totalAudiencias +
                                  totalNotasSaidas +
                                  totalNotasEntrada +
                                  totalRequerimento)) *
                                100
                            )}{" "}
                            %
                          </span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          Notas de saída
                          <span className="float-right text-warning  ">
                            {" "}
                            {Math.round(
                              (totalNotasSaidas /
                                (totalAudiencias +
                                  totalNotasSaidas +
                                  totalNotasEntrada +
                                  totalRequerimento)) *
                                100
                            )}{" "}
                            %
                          </span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          Audiências
                          <span className="float-right text-success ">
                            {" "}
                            {Math.round(
                              (totalAudiencias /
                                (totalAudiencias +
                                  totalNotasSaidas +
                                  totalNotasEntrada +
                                  totalRequerimento)) *
                                100
                            )}{" "}
                            %
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* /.footer */}
                </div>
              </div>
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title">
                      Dados Mensais de entrada de expedientes
                    </h5>
                    <div className="card-tools">
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="collapse"
                      >
                        <i className="fas fa-minus" />
                      </button>
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-tool dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          <i className="fas fa-wrench" />
                        </button>
                        <div
                          className="dropdown-menu dropdown-menu-right"
                          role="menu"
                        >
                          <a href="#" className="dropdown-item">
                            Action
                          </a>
                          <a href="#" className="dropdown-item">
                            Another action
                          </a>
                          <a href="#" className="dropdown-item">
                            Something else here
                          </a>
                          <a className="dropdown-divider" />
                          <a href="#" className="dropdown-item">
                            Separated link
                          </a>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="remove"
                      >
                        <i className="fas fa-times" />
                      </button>
                    </div>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">
                    <div className="row">
                      {/* /.col */}
                      <div className="col-md-12">
                        <p className="text-center">
                          <strong>Goal Completion</strong>
                        </p>
                        <div className="progress-group">
                          Add Products to Cart
                          <span className="float-right">
                            <b>160</b>/200
                          </span>
                          <div className="progress progress-sm">
                            <div
                              className="progress-bar bg-primary"
                              style={{ width: "80%" }}
                            />
                          </div>
                        </div>
                        {/* /.progress-group */}
                        <div className="progress-group">
                          Complete Purchase
                          <span className="float-right">
                            <b>310</b>/400
                          </span>
                          <div className="progress progress-sm">
                            <div
                              className="progress-bar bg-danger"
                              style={{ width: "75%" }}
                            />
                          </div>
                        </div>
                        {/* /.progress-group */}
                        <div className="progress-group">
                          <span className="progress-text">
                            Visit Premium Page
                          </span>
                          <span className="float-right">
                            <b>480</b>/800
                          </span>
                          <div className="progress progress-sm">
                            <div
                              className="progress-bar bg-success"
                              style={{ width: "60%" }}
                            />
                          </div>
                        </div>
                        {/* /.progress-group */}
                        <div className="progress-group">
                          Send Inquiries
                          <span className="float-right">
                            <b>250</b>/500
                          </span>
                          <div className="progress progress-sm">
                            <div
                              className="progress-bar bg-warning"
                              style={{ width: "50%" }}
                            />
                          </div>
                        </div>
                        {/* /.progress-group */}
                      </div>
                      {/* /.col */}
                    </div>
                    {/* /.row */}
                  </div>
                  {/* ./card-body */}

                  {/* /.card-footer */}
                </div>
                {/* /.card */}
              </div>

              {/* /.col */}
            </div>

            {/* /.row */}
          </div>
          {/*/. container-fluid */}
        </section>
        {/* /.content */}
      </div>
      {/* /.content-wrapper */}
      {/* Control Sidebar */}
      <aside className="control-sidebar control-sidebar-dark">
        {/* Control sidebar content goes here */}
      </aside>
      {/* /.control-sidebar */}
    </div>
  );
}

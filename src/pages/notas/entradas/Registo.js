import { Paper, makeStyles } from "@material-ui/core";
import React from "react";
import RegistoForm from "./RegistoForm";
import PageHeader from "../../../components/PageHeader";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";

const useStyles = makeStyles((theme) => ({
  PageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));
export default function Registo() {
  const classes = useStyles();

  return (
    <div>
      {/* Content Wrapper. Contains page content */}
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">
                  <DocumentScannerIcon fontSize="large" />
                  Entrada de Notas de Envio
                </h1>
              </div>
              {/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="/#/">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Entrada/Notas</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <section className="content">
          <div className="container-fluid">
            <Paper className={classes.PageContent}>
              <RegistoForm />
            </Paper>
          </div>
        </section>
      </div>
    </div>
  );
}

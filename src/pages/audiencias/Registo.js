import { Paper, makeStyles } from "@material-ui/core";
import React from "react";
import RegistoForm from "./RegistoForm";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

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
                  <CalendarMonthIcon fontSize="large" color="warning" />
                  Registo de Solicitação de Audiência
                </h1>
              </div>
              {/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="/#/">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Audiencias</li>
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

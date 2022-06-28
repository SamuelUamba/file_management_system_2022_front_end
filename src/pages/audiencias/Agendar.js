import {
  Paper,
  makeStyles,
  TableBody,
  TableRow,
  TableCell,
  Toolbar,
  InputAdornment,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import AgendarForm from "./AgendarForm";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import useTable from "../../components/useTable";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import CloseIcon from "@material-ui/icons/Close";
import Controls from "../../components/controls/Controls";
import { Search } from "@material-ui/icons";
import Popup from "../../components/Popup";
import { ConfirmDialog } from "../../components/ConfirmDialog";
import Notification from "../../components/Notification";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { BallTriangle } from "react-loader-spinner";
const useStyles = makeStyles((theme) => ({
  PageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  searchInput: {
    width: "50%",
  },
  progress: {
    position: "absolute",
    right: "750px",
  },
}));
const headCells = [
  { id: "Ordem", label: "Ordem" },
  { id: "data_marcacao", label: "Data da Marcação" },
  { id: "assunto", label: "Assunto" },
  { id: "estado", label: "Estado do pedido" },
  { id: "actions", label: "Acções", disableSorting: true },
];
export default function Tabela_dados() {
  const classes = useStyles();
  const [actualizar, setActualizar] = useState(false);
  const [loading, setLoading] = React.useState(false);
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [records, setRecords] = useState([]);
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });
  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    useTable(records, headCells, filterFn);
  const handleSearch = (e) => {
    let target = e.target;
    setFilterFn({
      fn: (items) => {
        if (target.value == "") return items;
        else
          return items.filter((x) =>
            x.assunto.toLowerCase().includes(target.value)
          );
      },
    });
  };

  const [openPopup, setOpenPopup] = useState(false);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });
  const Edit = (registo) => {
    fetch(
      "http://localhost:8000/api/updateAudiencia2/" +
        registo.id +
        "?_method=PUT",
      {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(registo),
      }
    ).then(() => {
      console.log("updated!");
      setNotify({
        isOpen: true,
        message: "Audiencia Marcada com sucesso!",
        type: "success",
      });
      getList();
    });
    setOpenPopup(false);
  };

  useEffect(() => {
    getList();
  }, []);
  const openInPopup = (item) => {
    setRecordForEdit(item);
    setOpenPopup(true);
  };
  useEffect(() => {
    getList();
  }, []);

  async function getList() {
    let result = await fetch("http://localhost:8000/api/getAudienciaPendente");
    result = await result.json();
    setRecords(result);
    setLoading(true);
  }
  return (
    <div>
      {/* Content Wrapper. Contains page content */}
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-8">
                <h1 className="m-0">
                  <CalendarMonthIcon fontSize="large" color="warning" />
                  Pedidos sem data Marcada
                </h1>
              </div>
              {/* /.col */}
              <div className="col-sm-4">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="/#/">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Audiências</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <section className="content">
          <div className="container-fluid">
            <Paper className={classes.PageContent}>
              <Toolbar>
                <Controls.Input
                  label="Pesquisar"
                  className={classes.searchInput}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Search />
                      </InputAdornment>
                    ),
                  }}
                  onChange={handleSearch}
                />
              </Toolbar>
              <TblContainer>
                <TblHead />
                {loading ? (
                  <TableBody>
                    {recordsAfterPagingAndSorting().map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>{item.id}</TableCell>
                        <TableCell>{item.data_marcacao}</TableCell>
                        <TableCell>{item.assunto}</TableCell>
                        <TableCell>{item.estado}</TableCell>
                        <TableCell>
                          <Controls.ActionButton
                            color="primary"
                            onClick={() => {
                              openInPopup(item);
                              setActualizar(true);
                              console.log(item);
                            }}
                          >
                            <CalendarMonthIcon
                              fontSize="small"
                              color="warning"
                            />

                            {/* <EditOutlinedIcon fontSize="small" /> */}
                          </Controls.ActionButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                ) : (
                  <Box className={classes.progress}>
                    {/* <CircularProgress /> */}
                    <BallTriangle color="#00BFFF" height={80} width={80} />
                    Carregando dados...
                  </Box>
                )}
              </TblContainer>
              <TblPagination />
            </Paper>
            <Popup
              title="Marcação da Data da Audiencia"
              openPopup={openPopup}
              setOpenPopup={setOpenPopup}
            >
              <AgendarForm
                recordForEdit={recordForEdit}
                Edit={Edit}
                actualizar={actualizar}
              />
            </Popup>

            <Notification notify={notify} setNotify={setNotify} />
            <ConfirmDialog
              confirmDialog={confirmDialog}
              setConfirmDialog={setConfirmDialog}
            />
          </div>
        </section>
      </div>
    </div>
  );
}

import {
  Paper,
  makeStyles,
  TableBody,
  TableRow,
  TableCell,
  Toolbar,
  InputAdornment,
} from "@material-ui/core";
import React, { useState } from "react";
import RegistoForm from "./RegistoForm";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import useTable from "../../components/useTable";
import * as AudienciasService from "./AudienciasService";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import CloseIcon from "@material-ui/icons/Close";
import Controls from "../../components/controls/Controls";
import { Search } from "@material-ui/icons";
import Popup from "../../components/Popup";
import { ConfirmDialog } from "../../components/ConfirmDialog";
import Notification from "../../components/Notification";

const useStyles = makeStyles((theme) => ({
  PageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  searchInput: {
    width: "50%",
  },
}));
const headCells = [
  { id: "Ordem", label: "Ordem" },
  { id: "data_marcacao", label: "Data do Pedido" },
  { id: "assunto", label: "Assunto" },
  { id: "estado_id", label: "Estado do Pedido" },
  { id: "destino_id", label: "Destino" },
  { id: "actions", label: "Acções", disableSorting: true },
];
export default function Tabela_dados() {
  const classes = useStyles();
  const [actualizar, setActualizar] = useState(false);
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [records, setRecords] = useState(AudienciasService.list());
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
    AudienciasService.update(registo);
    setRecords(AudienciasService.list());
    setNotify({
      isOpen: true,
      message: "Dado Actualizado com sucesso!",
      type: "success",
    });
    setOpenPopup(false);
    setRecordForEdit(null);
  };
  const onDelete = (id) => {
    AudienciasService.destroy(id);
    setRecords(AudienciasService.list());
    setNotify({
      isOpen: true,
      message: "Dado Eliminado com sucesso!",
      type: "error",
    });
    setConfirmDialog({
      isOpen: false,
    });
  };
  const openInPopup = (item) => {
    setRecordForEdit(item);
    setOpenPopup(true);
  };
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
                  <DocumentScannerIcon fontSize="large" />
                  Lista de Pedidos de Audiências
                </h1>
              </div>
              {/* /.col */}
              <div className="col-sm-4">
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
                <TableBody>
                  {recordsAfterPagingAndSorting().map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.id}</TableCell>
                      <TableCell>{item.data_marcacao}</TableCell>
                      <TableCell>{item.assunto}</TableCell>
                      <TableCell>{item.estado_id}</TableCell>
                      <TableCell>{item.destino_id}</TableCell>
                      <TableCell>
                        <Controls.ActionButton
                          color="primary"
                          onClick={() => {
                            openInPopup(item);
                            setActualizar(true);
                            console.log(item);
                          }}
                        >
                          <EditOutlinedIcon fontSize="small" />
                        </Controls.ActionButton>
                        <Controls.ActionButton
                          color="secondary"
                          onClick={() => {
                            setConfirmDialog({
                              isOpen: true,
                              title: "Tens Certeza da Operação?",
                              subTitle: "Esta acção não é reversível",
                              onConfirm: () => {
                                onDelete(item.id);
                                setOpenPopup(false);
                              },
                            });
                          }}
                        >
                          <CloseIcon fontSize="small" />
                        </Controls.ActionButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </TblContainer>
              <TblPagination />
            </Paper>
            <Popup
              title="Atualização de Dados"
              openPopup={openPopup}
              setOpenPopup={setOpenPopup}
            >
              <RegistoForm
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
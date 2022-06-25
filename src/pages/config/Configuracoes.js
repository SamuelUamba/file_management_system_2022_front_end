import React, { useState } from "react";
import PageHeader from "../../components/PageHeader";
import { Paper, makeStyles } from "@material-ui/core";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@material-ui/core";
import Controls from "../../components/controls/Controls";
import PrintIcon from "@mui/icons-material/Print";
import Popup from "../../components/Popup";
import AddDestino from "./AddDestino";
import AddProveniencia from "./AddProveniencia";
import AddLocalidades from "./AddLocalidades";
import SettingsIcon from "@mui/icons-material/Settings";
import AddCircleIcon from "@mui/icons-material/AddCircle";
const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(3),
    padding: theme.spacing(10),
  },
}));

export default function Configuracoes() {
  const classes = useStyles();
  const [openPopup, setOpenPopup] = useState(false);
  const [openPopup2, setOpenPopup2] = useState(false);
  const [openPopup3, setOpenPopup3] = useState(false);
  return (
    <>
      <div className="content-wrapper">
        <PageHeader
          title="Configurações Gerais"
          subtitle="Adicionando elementos"
          icon={<SettingsIcon fontSize="large" color="success" />}
        />
        <Paper className={classes.pageContent}>
          <Grid container>
            <Grid item xs={4}>
              <Box>
                <CardContent>
                  <Typography variant="h6" component="div">
                    Destinos
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Adicionar Destinos mais frequentes em relação as notas,
                    pedidos de audiências,e requerimentos. Exemplo: Gabinete do
                    director dos curso de Informática.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Controls.Button
                    startIcon={<AddCircleIcon fontSize="large" color="info" />}
                    text="Adicionar"
                    variant="outlined"
                    size="extra-large"
                    onClick={() => {
                      setOpenPopup(true);
                    }}
                  />
                </CardActions>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box>
                <CardContent>
                  <Typography variant="h6" component="div">
                    Localização/Províncias/Distritos
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Adicionar locais mais frequentes em termos da proveniencia
                    dos documentos. Exemplo: Matola.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Controls.Button
                    startIcon={
                      <AddCircleIcon fontSize="large" color="success" />
                    }
                    text="Adicionar"
                    variant="outlined"
                    size="extra-large"
                    onClick={() => {
                      setOpenPopup2(true);
                    }}
                  />
                </CardActions>
              </Box>
            </Grid>

            <Grid item xs={4}>
              <Box>
                <CardContent>
                  <Typography variant="h6" component="div">
                    Adicionar Proveniencias dos Documentos
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Adicionar Proveniencias mais frequentes dos documentos.
                    Exemplo: Reitoria.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Controls.Button
                    startIcon={
                      <AddCircleIcon fontSize="large" color="primary" />
                    }
                    text="Adicionar"
                    variant="outlined"
                    size="extra-large"
                    // variant="ghost"
                    onClick={() => {
                      setOpenPopup3(true);
                    }}
                  />
                </CardActions>
              </Box>
            </Grid>
          </Grid>
        </Paper>
        <Popup
          title="Adicionando Destinos"
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
        >
          <AddDestino />
        </Popup>
        <Popup
          title="Adicionando Localidades"
          openPopup={openPopup2}
          setOpenPopup={setOpenPopup2}
        >
          <AddLocalidades />
        </Popup>
        <Popup
          title="Adicionando Proveniencias"
          openPopup={openPopup3}
          setOpenPopup={setOpenPopup3}
        >
          <AddProveniencia />
        </Popup>
        {/* <Popup
          title="Adicionando Zona"
          openPopup={openPopup4}
          setOpenPopup={setOpenPopup4}
        >
          <AddAlas />
        </Popup> */}
        ;
      </div>
    </>
  );
}

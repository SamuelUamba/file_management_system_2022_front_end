import React, { useState, useEffect } from "react";
import { Grid, FormLabel } from "@material-ui/core";
import Controls from "../../../components/controls/Controls";
import { useForm, Form } from "../../../components/useForm";
import Notification from "../../../components/Notification";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
const initialFValues = {
  id: 0,
  data_entrada: new Date(),
  assunto: "",
  tipo: "normal",
  observacao: "",
  destino_id: "",
  despacho: "",
  nome: "",
  email: "",
  contacto: "",
};
const prioridadeItens = [
  { id: "normal", title: "Normal" },
  { id: "urgente", title: "Urgente" },
];

export default function RegistoForm(props) {
  const { Edit, recordForEdit, actualizar } = props;
  const [destinos, setDestinos] = useState([]);
  useEffect(() => {
    getDestinos();
  }, []);
  //Validacao de dados  no formulario
  const validate = (fieldFValues = values) => {
    let temp = { ...errors };
    if ("assunto" in fieldFValues)
      temp.assunto = fieldFValues.assunto ? "" : "Campo obrigatório.";
    if ("nome" in fieldFValues)
      temp.nome = fieldFValues.nome ? "" : "Campo obrigatório.";
    if ("requerente_id" in fieldFValues)
      temp.requerente_id = fieldFValues.requerente_id
        ? ""
        : "Campo obrigatório.";

    if ("destino_id" in fieldFValues)
      temp.destino_id =
        fieldFValues.destino_id.length != 0 ? "" : "Campo obrigatório.";
    if ("data_entrada" in fieldFValues)
      temp.data_entrada =
        fieldFValues.data_entrada.length != 0 ? "" : "Campo obrigatório.";
    if ("email" in fieldFValues)
      temp.email = /$^|.+@.+..+/.test(values.email) ? "" : "Email invalido.";
    if ("contacto" in fieldFValues)
      temp.contacto =
        fieldFValues.contacto.length == 9 ? "" : "Minino 9 Digitos.";

    setErrors({
      ...temp,
    });

    if (fieldFValues == values)
      return Object.values(temp).every((x) => x == "");
  };
  //Ao submeter o formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      if (actualizar) {
        Edit(values);
      } else {
        fetch("http://localhost:8000/api/saveRequerente", {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(values),
        }).then(() => {
          console.log("entrada adicionada!");
        });
        fetch("http://localhost:8000/api/saveRequerimento", {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(values),
        }).then(() => {
          console.log("entrada adicionada!");
          setNotify({
            isOpen: true,
            message: "Dado Submetido com sucesso!",
            type: "success",
          });
        });
      }
      resetForm();
    }
  };
  const { values, setValues, resetForm, errors, setErrors, handleInputChange } =
    useForm(initialFValues, true, validate);
  const [openPopup, setOpenPopup] = useState(false);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  //preenchendo os campos para actualizacao de dados
  useEffect(() => {
    if (recordForEdit != null)
      setValues({
        ...recordForEdit,
      });
  }, [recordForEdit]);
  async function getDestinos() {
    let result = await fetch("http://localhost:8000/api/getDestino");
    result = await result.json();
    setDestinos(result);
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Grid container>
          <Grid xs={6}>
            <Controls.Input
              variant="outlined"
              label="Assunto"
              name="assunto"
              value={values.assunto}
              onChange={handleInputChange}
              multiline
              rows={2}
              error={errors.assunto}
            />{" "}
            <Controls.Select
              name="destino_id"
              label="Destino"
              value={values.destino_id}
              onChange={handleInputChange}
              options={destinos}
              error={errors.destino_id}
            />
            <Controls.RadioGroup
              // label="Prioridade"
              name="tipo"
              value={values.tipo}
              onChange={handleInputChange}
              items={prioridadeItens}
              checked
            />
            {/* <FormLabel>Data de Entrada</FormLabel> */}
            <Controls.Input
              variant="outlined"
              type="date"
              //   label="Data de Entrada"
              name="data_entrada"
              value={values.data_entrada}
              onChange={handleInputChange}
              error={errors.data_entrada}
            />{" "}
          </Grid>
          <Grid xs={6}>
            <Controls.Input
              variant="outlined"
              name="nome"
              label="Nome do Requerente"
              value={values.nome}
              onChange={handleInputChange}
              error={errors.nome}
            />{" "}
            <Controls.Input
              variant="outlined"
              name="email"
              label="E-mail"
              value={values.email}
              onChange={handleInputChange}
              error={errors.email}
            />{" "}
            <Controls.Input
              variant="outlined"
              label="Contacto Telefonico"
              name="contacto"
              value={values.contacto}
              onChange={handleInputChange}
              error={errors.contacto}
            />{" "}
            <Controls.Input
              variant="outlined"
              label="Observação"
              name="observacao"
              value={values.observacao}
              onChange={handleInputChange}
              multiline
              rows={3}
              error={errors.observacao}
            />
          </Grid>
          <div>
            <Controls.Button
              type="submit"
              variant="outlined"
              text="Submeter"
              startIcon={<SaveIcon />}
            />
            <Controls.Button
              startIcon={<CancelIcon />}
              text="Cancelar"
              variant="outlined"
              color="secondary"
              onClick={resetForm}
            />
          </div>
        </Grid>
        <Notification notify={notify} setNotify={setNotify} />
      </Form>
    </>
  );
}

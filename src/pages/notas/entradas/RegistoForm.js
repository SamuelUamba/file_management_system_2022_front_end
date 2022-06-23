import React, { useState, useEffect } from "react";
import { Grid, TextField, FormLabel, makeStyles } from "@material-ui/core";
import Controls from "../../../components/controls/Controls";
import { useForm, Form } from "../../../components/useForm";
import Notification from "../../../components/Notification";
import * as NotaService from "../NotaService";

const initialFValues = {
  id: 0,
  data_entrada: new Date(),
  assunto: "",
  codigo_nota: "",
  tipo: "normal",
  observacao: "",
  destino_id: "",
  localidade_id: "",
  proveniencia_id: "",
  //   isSubmited: true,
};
const prioridadeItens = [
  { id: "normal", title: "Normal" },
  { id: "urgente", title: "Urgente" },
];
export default function RegistoForm(props) {
  const { Edit, recordForEdit, actualizar } = props;
  const [proveniencias, setProveniencias] = useState([]);
  const [localidades, setLocalidades] = useState([]);
  const [destinos, setDestinos] = useState([]);

  useEffect(() => {
    getProveniencias();
    getLocalidade();
    getDestinos();
  }, []);
  //Validacao de dados  no formulario
  const validate = (fieldFValues = values) => {
    let temp = { ...errors };
    if ("codigo_nota" in fieldFValues)
      temp.codigo_nota = fieldFValues.codigo_nota ? "" : "Campo obrigatório.";
    if ("assunto" in fieldFValues)
      temp.assunto = fieldFValues.assunto ? "" : "Campo obrigatório.";
    if ("observacao" in fieldFValues)
      temp.observacao = fieldFValues.observacao ? "" : "Campo obrigatório.";
    if ("proveniencia_id" in fieldFValues)
      temp.proveniencia_id =
        fieldFValues.proveniencia_id.length != 0 ? "" : "Campo obrigatório.";
    if ("destino_id" in fieldFValues)
      temp.destino_id =
        fieldFValues.destino_id.length != 0 ? "" : "Campo obrigatório.";

    if ("localidade_id" in fieldFValues)
      temp.localidade_id =
        fieldFValues.localidade_id.length != 0 ? "" : "Campo obrigatório.";
    if ("data_entrada" in fieldFValues)
      temp.data_entrada =
        fieldFValues.data_entrada.length != 0 ? "" : "Campo obrigatório.";

    setErrors({
      ...temp,
    });

    if (fieldFValues == values)
      return Object.values(temp).every((x) => x == "");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      if (actualizar) {
        Edit(values);
      } else {
        fetch("http://localhost:8000/api/saveNotaEntrada", {
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
  async function getProveniencias() {
    let result = await fetch("http://localhost:8000/api/getProveniencia");
    result = await result.json();
    setProveniencias(result);
  }
  async function getLocalidade() {
    let result = await fetch("http://localhost:8000/api/getLocalidade");
    result = await result.json();
    setLocalidades(result);
  }
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
              label="Referência da Nota"
              name="codigo_nota"
              value={values.codigo_nota}
              onChange={handleInputChange}
              error={errors.codigo_nota}
            />{" "}
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
              name="proveniencia_id"
              label="Proveniência"
              value={values.proveniencia_id}
              onChange={handleInputChange}
              options={proveniencias}
              error={errors.proveniencia_id}
            />{" "}
            <Controls.Select
              name="localidade_id"
              label="Localidade"
              value={values.localidade_id}
              onChange={handleInputChange}
              options={localidades}
              error={errors.localidade_id}
            />
            <Controls.Select
              name="destino_id"
              label="Destino"
              value={values.destino_id}
              onChange={handleInputChange}
              options={destinos}
              error={errors.destino_id}
            />
          </Grid>
          <Grid xs={6}>
            <Controls.RadioGroup
              label="Prioridade"
              name="tipo"
              value={values.tipo}
              onChange={handleInputChange}
              items={prioridadeItens}
              checked
            />
            <Controls.Input
              variant="outlined"
              label="Observação"
              name="observacao"
              value={values.observacao}
              onChange={handleInputChange}
              multiline
              rows={5}
              error={errors.observacao}
            />
            <FormLabel>Data de Entrada</FormLabel>
            <Controls.Input
              variant="outlined"
              type="date"
              //   label="Data de Entrada"
              name="data_entrada"
              value={values.data_entrada}
              onChange={handleInputChange}
              error={errors.data_entrada}
            />{" "}
            {/* <Controls.DatePicker
              name="hireDate"
              label="Data inicio"
              // value={values.hireDate}
              onChange={handleInputChange}
            /> */}
          </Grid>
          <div>
            <Controls.Button type="submit" variant="outlined" text="Submeter" />
            <Controls.Button
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

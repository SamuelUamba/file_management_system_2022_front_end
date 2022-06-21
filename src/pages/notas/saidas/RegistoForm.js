import React, { useState, useEffect } from "react";
import { Grid, TextField, FormLabel, makeStyles } from "@material-ui/core";
import Controls from "../../../components/controls/Controls";
import { useForm, Form } from "../../../components/useForm";
import Notification from "../../../components/Notification";
import * as NotaService from "../NotaService";

const initialFValues = {
  id: 0,
  data_saida: new Date(),
  assunto: "",
  nota_saida_id: "",
  observacao: "",
  destino_id: "",
  localidade_id: "",
  //   isSubmited: true,
};
const prioridadeItens = [
  { id: "normal", title: "Normal" },
  { id: "urgente", title: "Urgente" },
];
export default function RegistoForm(props) {
  const { Edit, recordForEdit, actualizar } = props;
  const [localidades, setLocalidades] = useState([]);
  const [destinos, setDestinos] = useState([]);
  useEffect(() => {
    getLocalidade();
    getDestinos();
  }, []);
  //Validacao de dados  no formulario
  const validate = (fieldFValues = values) => {
    let temp = { ...errors };
    if ("nota_saida_id" in fieldFValues)
      temp.nota_saida_id = fieldFValues.nota_saida_id
        ? ""
        : "Campo obrigatório.";
    if ("assunto" in fieldFValues)
      temp.assunto = fieldFValues.assunto ? "" : "Campo obrigatório.";
    if ("observacao" in fieldFValues)
      temp.observacao = fieldFValues.observacao ? "" : "Campo obrigatório.";

    if ("destino_id" in fieldFValues)
      temp.destino_id =
        fieldFValues.destino_id.length != 0 ? "" : "Campo obrigatório.";

    if ("localidade_id" in fieldFValues)
      temp.localidade_id =
        fieldFValues.localidade_id.length != 0 ? "" : "Campo obrigatório.";
    if ("data_saida" in fieldFValues)
      temp.data_saida =
        fieldFValues.data_saida.length != 0 ? "" : "Campo obrigatório.";

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
        fetch("http://localhost:8000/api/saveNotaSaida", {
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
              name="nota_saida_id"
              value={values.nota_saida_id}
              onChange={handleInputChange}
              error={errors.nota_saida_id}
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
              name="destino_id"
              label="Destino"
              value={values.destino_id}
              onChange={handleInputChange}
              options={destinos}
              error={errors.destino_id}
            />
            <Controls.Select
              name="localidade_id"
              label="Localidade"
              value={values.localidade_id}
              onChange={handleInputChange}
              options={localidades}
              error={errors.localidade_id}
            />
          </Grid>
          <Grid xs={6}>
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
            <FormLabel>Data da Saida</FormLabel>
            <Controls.Input
              variant="outlined"
              type="date"
              //   label="Data de Entrada"
              name="data_saida"
              value={values.data_saida}
              onChange={handleInputChange}
              error={errors.data_saida}
            />{" "}
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

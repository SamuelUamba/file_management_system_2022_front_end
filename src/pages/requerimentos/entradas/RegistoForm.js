import React, { useState, useEffect } from "react";
import { Grid, TextField, FormLabel, makeStyles } from "@material-ui/core";
import Controls from "../../../components/controls/Controls";
import { useForm, Form } from "../../../components/useForm";
import Notification from "../../../components/Notification";
import * as NotaService from "../RequerimentosService";

const initialFValues = {
  id: 0,
  data_entrada: new Date(),
  assunto: "",
  tipo: "normal",
  observacao: "",
  destino_id: "",

  requerente_id: "",
  nome_requerente: "",
  email_requerente: "",
  contacto_requerente: "",

  //   isSubmited: true,
};
const prioridadeItens = [
  { id: "normal", title: "Normal" },
  { id: "urgente", title: "Urgente" },
];
export default function RegistoForm(props) {
  const { Edit, recordForEdit, actualizar } = props;

  //Validacao de dados  no formulario
  const validate = (fieldFValues = values) => {
    let temp = { ...errors };
    if ("assunto" in fieldFValues)
      temp.assunto = fieldFValues.assunto ? "" : "Campo obrigatório.";
    if ("nome_requerente" in fieldFValues)
      temp.nome_requerente = fieldFValues.nome_requerente
        ? ""
        : "Campo obrigatório.";

    if ("observacao" in fieldFValues)
      temp.observacao = fieldFValues.observacao ? "" : "Campo obrigatório.";
    if ("destino_id" in fieldFValues)
      temp.destino_id =
        fieldFValues.destino_id.length != 0 ? "" : "Campo obrigatório.";

    if ("requerente_id" in fieldFValues)
      temp.requerente_id =
        fieldFValues.requerente_id.length != 0 ? "" : "Campo obrigatório.";
    if ("data_entrada" in fieldFValues)
      temp.data_entrada =
        fieldFValues.data_entrada.length != 0 ? "" : "Campo obrigatório.";

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
        NotaService.create(values);
        setNotify({
          isOpen: true,
          message: "Dado Submetido com sucesso!",
          type: "success",
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
              options={NotaService.getDestinos()}
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
            <Controls.Input
              variant="outlined"
              label="Observação"
              name="observacao"
              value={values.observacao}
              onChange={handleInputChange}
              multiline
              rows={2}
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
          </Grid>
          <Grid xs={6}>
            <Controls.Select
              name="requerente_id"
              label="Requerente"
              value={values.requerente_id}
              onChange={handleInputChange}
              options={NotaService.getLocalidade()}
              error={errors.requerente_id}
            />
            <Controls.Input
              variant="outlined"
              name="nome_requerente"
              label="Nome do Requerente"
              value={values.nome_requerente}
              onChange={handleInputChange}
              error={errors.nome_requerente}
            />{" "}
            <Controls.Input
              variant="outlined"
              name="email_requerente"
              label="E-mail do Requrente"
              value={values.email_requerente}
              onChange={handleInputChange}
              error={errors.email_requerente}
            />{" "}
            <Controls.Input
              variant="outlined"
              label="Contacto Telefonico"
              name="contacto_requerente"
              value={values.contacto_requerente}
              onChange={handleInputChange}
              error={errors.contacto_requerente}
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

import React, { useState, useEffect } from "react";
import { Grid, TextField, FormLabel, makeStyles } from "@material-ui/core";
import Controls from "../../components/controls/Controls";
import { useForm, Form } from "../../components/useForm";
import Notification from "../../components/Notification";
import * as AudienciasService from "./AudienciasService";

const initialFValues = {
  id: 0,
  data_marcacao: new Date(),
  data_audiencia: new Date(),
  assunto: "",

  solicitante_id: "",
  nome: "",
  email: "",
  contacto: "",
  observacao: "",
  estado_id: "0",

  //   isSubmited: true
};
const estadoItens = [
  { id: "0", title: "Pendente" },
  { id: "1", title: "Marcado" },
];
export default function RegistoForm(props) {
  const { Edit, recordForEdit, actualizar } = props;

  //Validacao de dados  no formulario
  const validate = (fieldFValues = values) => {
    let temp = { ...errors };
    if ("assunto" in fieldFValues)
      temp.assunto = fieldFValues.assunto ? "" : "Campo obrigatório.";
    if ("nome" in fieldFValues)
      temp.nome = fieldFValues.nome ? "" : "Campo obrigatório.";

    if ("observacao" in fieldFValues)
      temp.observacao = fieldFValues.observacao ? "" : "Campo obrigatório.";
    if ("destino_id" in fieldFValues)
      temp.destino_id =
        fieldFValues.destino_id.length != 0 ? "" : "Campo obrigatório.";

    if ("solicitante_id" in fieldFValues)
      temp.solicitante_id =
        fieldFValues.solicitante_id.length != 0 ? "" : "Campo obrigatório.";
    if ("data_marcacao" in fieldFValues)
      temp.data_marcacao =
        fieldFValues.data_marcacao.length != 0 ? "" : "Campo obrigatório.";

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
        AudienciasService.create(values);
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
            <Controls.RadioGroup
              name="estado_id"
              value={values.estado_id}
              onChange={handleInputChange}
              items={estadoItens}
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
            <FormLabel>Data da Marcação</FormLabel>
            <Controls.Input
              variant="outlined"
              type="date"
              name="data_marcacao"
              value={values.data_marcacao}
              onChange={handleInputChange}
              error={errors.data_marcacao}
            />{" "}
            <FormLabel>Data da Audiência</FormLabel>
            <Controls.Input
              variant="outlined"
              type="date"
              name="data_audiencia"
              value={values.data_audiencia}
              onChange={handleInputChange}
              error={errors.data_audiencia}
            />{" "}
          </Grid>
          <Grid xs={6}>
            <Controls.Select
              name="solicitante_id"
              label="Solicitante"
              value={values.solicitante_id}
              onChange={handleInputChange}
              options={AudienciasService.getLocalidade()}
              error={errors.solicitante_id}
            />
            <Controls.Input
              variant="outlined"
              name="nome"
              label="Nome do Solicitante"
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

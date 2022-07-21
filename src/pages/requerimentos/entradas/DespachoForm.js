import React, { useState, useEffect } from "react";
import { Grid, FormLabel } from "@material-ui/core";
import Controls from "../../../components/controls/Controls";
import { useForm, Form } from "../../../components/useForm";
import Notification from "../../../components/Notification";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import emailjs from "emailjs-com";

const initialFValues = {
  id: 0,
  despacho: "diferido",
};
const despachoItens = [
  { id: "diferido", title: "Requerimento Diferido" },
  { id: "indeferido", title: "Requerimento Indeferido" },
];
export default function DespachoForm(props) {
  const { Edit, despacho, recordForEdit } = props;

  //Validacao de dados  no formulario
  const validate = (fieldFValues = values) => {
    let temp = { ...errors };
    if ("despacho" in fieldFValues)
      temp.despacho = fieldFValues.despacho ? "" : "Campo obrigatório.";
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
      if (despacho) {
        Edit(values);
        emailjs
          .sendForm(
            "service_mz42su7",
            "template_vaftqiq",
            e.target,
            "35eVMx6GQ9Yxpq9lL"
          )
          .then((resp) => {
            console.log(resp);
          })
          .cath((err) => console.log(err));
        resetForm();
      }
    }
  };
  const { values, setValues, resetForm, errors, setErrors, handleInputChange } =
    useForm(initialFValues, true, validate);
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
          <Grid xs={12}>
            <input
              type="hidden"
              name="name"
              value="UEM-Departamento de Matematica e informatica"
            />
            <input type="hidden" name="destino" value={recordForEdit.email} />
            <input
              type="hidden"
              name="mensagem"
              value="Comunicamos por meio desta que seu requerimento ja possui despacho."
            />
            <Controls.RadioGroup
              // label="Prioridade"
              name="despacho"
              value={values.despacho}
              onChange={handleInputChange}
              items={despachoItens}
              checked
              row
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

import React, { useState, useEffect } from "react";
import { Grid, FormLabel } from "@material-ui/core";
import Controls from "../../components/controls/Controls";
import { useForm, Form } from "../../components/useForm";
import Notification from "../../components/Notification";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
const initialFValues = {
  id: 0,
  hora_audiencia: "",
  data_audiencia: new Date(),
};

export default function AgendarForm(props) {
  const { Edit, recordForEdit, actualizar } = props;
  //Validacao de dados  no formulario
  const validate = (fieldFValues = values) => {
    let temp = { ...errors };
    if ("hora_audiencia" in fieldFValues)
      temp.hora_audiencia = fieldFValues.hora_audiencia
        ? ""
        : "Campo obrigatório.";
    if ("data_audiencia" in fieldFValues)
      temp.data_audiencia = fieldFValues.data_audiencia
        ? ""
        : "Campo obrigatório.";

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
            <h5>Data</h5>
            <Controls.Input
              variant="outlined"
              type="date"
              name="data_audiencia"
              value={values.data_audiencia}
              onChange={handleInputChange}
              error={errors.data_audiencia}
            />{" "}
            <h5>Hora</h5>
            <Controls.Input
              variant="outlined"
              type="time"
              name="hora_audiencia"
              value={values.hora_audiencia}
              onChange={handleInputChange}
              error={errors.hora_audiencia}
            />{" "}
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

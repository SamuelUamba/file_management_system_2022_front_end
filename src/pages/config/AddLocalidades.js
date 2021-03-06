import React, { useState, useEffect } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import Controls from "../../components/controls/Controls";
import { useForm, Form } from "../../components/useForm";
import Notification from "../../components/Notification";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
const initialFValues = {
  id: 0,
  designacao: "",
};
const useStyles = makeStyles({
  formulario: {
    width: "100%",
  },
});

export default function AddLocalidades(props) {
  const classes = useStyles();
  const { Edit, recordForEdit, actualizar } = props;
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  //Validacao de dados  no formulario
  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("designacao" in fieldValues)
      temp.designacao = fieldValues.designacao ? "" : "Campo obrigatório.";
    setErrors({
      ...temp,
    });

    if (fieldValues == values) return Object.values(temp).every((x) => x == "");
  };
  const { values, setValues, resetForm, errors, setErrors, handleInputChange } =
    useForm(initialFValues, true, validate);

  //Ao submeter o formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      if (actualizar) {
        Edit(values);
      } else {
        fetch("http://localhost:8000/api/saveLocalidade", {
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

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={12}>
          <Controls.Input
            label="Designação da Localidade"
            name="designacao"
            value={values.designacao}
            onChange={handleInputChange}
            error={errors.designacao}
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
  );
}

import emailjs from "emailjs-com";
import { Paper, makeStyles } from "@material-ui/core";
import PageHeader from "../components/PageHeader";
import { Grid, FormLabel } from "@material-ui/core";
import Controls from "../components/controls/Controls";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(3),
    padding: theme.spacing(10),
  },
}));
const Email = () => {
  const classes = useStyles();
  function sendEmail(e) {
    e.preventDefault();
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
  }
  return (
    <>
      <div className="content-wrapper">
        <PageHeader
          title="Configurações Gerais"
          subtitle="Adicionando elementos"
        />
        <Paper className={classes.pageContent}>
          <Grid container>
            <Grid xs={12}>
              <Controls.Input variant="outlined" label="Nome" name="name" />{" "}
              <Controls.Input
                variant="outlined"
                label="destino"
                name="destino"
              />{" "}
              
              <Controls.Input
                variant="outlined"
                label="Mensagem"
                name="mensagem"
                multiline
                rows={4}
              />{" "}
            </Grid>
            {/* <form onSubmit={sendEmail}>
              <label>name</label>
              <input type="text" name="name" />

              <label>email</label>
              <input type="email" name="email_destino" />

              <label>Message</label>
              <textarea name="mensagem" rows="4" />

              <input type="submit" value="send" />
            </form> */}
            <div>
              <Controls.Button
                type="submit"
                variant="outlined"
                text="Submeter"
                onClick={sendEmail}
              />
            </div>
          </Grid>
        </Paper>
      </div>
    </>
  );
};
export default Email;

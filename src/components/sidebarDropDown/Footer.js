import React from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  Item,
  InputBase,
  Badge,
  IconButton,
  makeStyles,
} from "@material-ui/core";

import CircleNotificationsRoundedIcon from "@mui/icons-material/CircleNotificationsRounded";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import PowerSettingsNewRoundedIcon from "@mui/icons-material/PowerSettingsNewRounded";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#0000",
    transform: "translateZ(0)",
  },
});
export default function Footer() {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Grid container alignItems="center">
          <p> Footr</p>
          <Grid item sm>
            {" "}
          </Grid>
          <Grid>
            <IconButton>
              <Badge badgeContent={4} color="secondary">
                <CircleNotificationsRoundedIcon fontSize="large" />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={3} color="primary">
                <ChatBubbleOutlineRoundedIcon fontSize="large" />
              </Badge>
            </IconButton>
            <IconButton>
              <PowerSettingsNewRoundedIcon fontSize="large" color="secondary" />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

import React from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  Badge,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import { useState, useEffect } from "react";
import Controls from "../controls/Controls";
import Popup from "../reusable_components/Popup";

import CircleNotificationsRoundedIcon from "@mui/icons-material/CircleNotificationsRounded";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import PowerSettingsNewRoundedIcon from "@mui/icons-material/PowerSettingsNewRounded";
import { FaGripHorizontal } from "react-icons/fa";

const useStyles = makeStyles({
  root: {
    background: "#009966",
    transform: "translateZ(0)",
  },
});

export default function Nav() {
  const classes = useStyles();

  const [openPopup, setOpenPopup] = useState(false);

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item sm>
            {" "}
          </Grid>
          <Grid>
            <IconButton>
              <Badge badgeContent={5} color="secondary">
                <CircleNotificationsRoundedIcon fontSize="large" />
              </Badge>
            </IconButton>
            <Controls.Button
              variant="outlined"
              startIcon={<FaGripHorizontal />}
              className={classes.newButton}
              onClick={() => {
                setOpenPopup(true);
              }}
            />
            <IconButton>
              <Badge badgeContent={5} color="secondary">
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
      <Popup title="Menu" openPopup={openPopup} setOpenPopup={setOpenPopup}>
        <IconButton>
          <PowerSettingsNewRoundedIcon fontSize="large" color="secondary" />
          mm
        </IconButton>
        <IconButton>
          <PowerSettingsNewRoundedIcon fontSize="large" color="secondary" />
        </IconButton>
        <IconButton>
          <PowerSettingsNewRoundedIcon fontSize="large" color="secondary" />
        </IconButton>
      </Popup>
    </AppBar>
  );
}

import React, { useState } from "react";
import SignUp from "./SignUp";
import Login from "./Login";

// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faUserPlus,
  faSignInAlt
} from "@fortawesome/free-solid-svg-icons";

// styles
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";
import Dialog from "@material-ui/core/Dialog";
import useStyles from "../../styles/auth/AuthenticationIconStyles";

function AuthenticationIcon(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openSignUpForm, setOpenSignUpForm] = useState(false);
  const [openLoginForm, setOpenLoginForm] = useState(false);

  return (
    <div className={classes.icons}>
      <Tooltip title="Sign up/Login" placement="left">
        <Fab
          color="secondary"
          aria-label="Add"
          className={classes.icon}
          onClick={() => setOpen(!open)}
        >
          <FontAwesomeIcon icon={faUser} />
        </Fab>
      </Tooltip>

      <Tooltip title="Sign up" placement="left">
        <Fab
          color="secondary"
          aria-label="Add"
          className={open ? classes.hiddenIcons : classes.hideIcons}
          onClick={() => setOpenSignUpForm(!openSignUpForm)}
        >
          <FontAwesomeIcon icon={faUserPlus} />
        </Fab>
      </Tooltip>

      <Tooltip title="Login" placement="left">
        <Fab
          color="secondary"
          aria-label="Add"
          className={open ? classes.hiddenIcons : classes.hideIcons}
          onClick={() => setOpenLoginForm(!openLoginForm)}
        >
          <FontAwesomeIcon icon={faSignInAlt} />
        </Fab>
      </Tooltip>

      <Dialog
        open={openSignUpForm}
        aria-labelledby="sign-up-dialog-title"
        onClose={() => setOpenSignUpForm(false)}
      >
        <SignUp />
      </Dialog>

      <Dialog
        open={openLoginForm}
        aria-labelledby="login-dialog-title"
        onClose={() => setOpenLoginForm(false)}
      >
        <Login />
      </Dialog>
    </div>
  );
}

export default AuthenticationIcon;

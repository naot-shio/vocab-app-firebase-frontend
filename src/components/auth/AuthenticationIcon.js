import React, { Component } from "react";
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
import withStyles from "@material-ui/core/styles/withStyles";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";
import Dialog from "@material-ui/core/Dialog";
import styles from "../../styles/auth/AuthenticationIconStyles";

class AuthenticationIcon extends Component {
  state = {
    open: false,
    openSignUpForm: false,
    openLoginForm: false
  };

  handleToggleSignUp = () => {
    this.setState({ openSignUpForm: !this.state.openSignUpForm });
  };

  handleToggleLogin = () => {
    this.setState({ openLoginForm: !this.state.openLoginForm });
  };

  render() {
    const { classes } = this.props;
    const { open, openSignUpForm, openLoginForm } = this.state;

    return (
      <div className={classes.icons}>
        <Tooltip title="Sign up/Login" placement="left">
          <Fab
            color="secondary"
            aria-label="Add"
            className={classes.icon}
            onClick={() => this.setState({ open: !open })}
          >
            <FontAwesomeIcon icon={faUser} />
          </Fab>
        </Tooltip>

        <Tooltip title="Sign up" placement="left">
          <Fab
            color="secondary"
            aria-label="Add"
            className={classes.hiddenIcon}
            style={{ display: open ? "block" : "none" }}
            onClick={this.handleToggleSignUp}
          >
            <FontAwesomeIcon icon={faUserPlus} />
          </Fab>
        </Tooltip>

        <Tooltip title="Login" placement="left">
          <Fab
            color="secondary"
            aria-label="Add"
            className={classes.hiddenIcon}
            style={{ display: open ? "block" : "none" }}
            onClick={this.handleToggleLogin}
          >
            <FontAwesomeIcon icon={faSignInAlt} />
          </Fab>
        </Tooltip>

        <Dialog
          open={openSignUpForm}
          aria-labelledby="sign-up-dialog-title"
          onClose={this.handleToggleSignUp}
        >
          <SignUp />
        </Dialog>

        <Dialog
          open={openLoginForm}
          aria-labelledby="login-dialog-title"
          onClose={this.handleToggleLogin}
        >
          <Login />
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(AuthenticationIcon);

import React, { Component } from "react";
import { withRouter } from "react-router";
import PropTypes from "prop-types";

// styles
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faEye,
  faEyeSlash
} from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/auth/AuthenticationStyles";

// Redux
import { connect } from "react-redux";
import { signUpUser } from "../../redux/actions/userActions";

class SignUp extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    loading: false,
    errors: {},
    showPassword: false,
    showPasswordConfirmation: false
  };

  static getDerivedStateFromProps(nextProps) {
    if (nextProps.UI.errors) {
      return { errors: nextProps.UI.errors };
    }
    return null;
  }

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  handleClickShowPasswordConfirmation = () => {
    this.setState({
      showPasswordConfirmation: !this.state.showPasswordConfirmation
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const newUserData = {
      name: this.state.name,
      email: this.state.email.toLowerCase(),
      password: this.state.password,
      confirmPassword: this.state.confirmPassword
    };
    this.props.signUpUser(newUserData);
    this.props.history.push("/sentences");
  };

  render() {
    const { classes } = this.props;
    const { errors } = this.state;
    return (
      <div className={classes.root}>
        <DialogTitle id="sign-up-dialog-title">
          <span className={classes.dialogIcon}>
            <FontAwesomeIcon icon={faUserPlus} />
          </span>
          Sign Up
        </DialogTitle>

        <form noValidate onSubmit={this.handleSubmit}>
          <TextField
            id="name"
            name="name"
            type="name"
            label="User Name"
            className={classes.textField}
            helperText={errors.name}
            error={errors.name ? true : false}
            value={this.state.name}
            onChange={this.handleChange}
            fullWidth
          />

          <TextField
            id="email"
            name="email"
            type="email"
            label="Email"
            className={classes.textField}
            helperText={errors.email}
            error={errors.email ? true : false}
            value={this.state.email}
            onChange={this.handleChange}
            fullWidth
          />

          <TextField
            id="password"
            name="password"
            type={this.state.showPassword ? "text" : "password"}
            label="Password"
            className={classes.textField}
            helperText={errors.password}
            error={errors.password ? true : false}
            value={this.state.password}
            onChange={this.handleChange}
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    aria-label="Toggle password visibility"
                    onClick={this.handleClickShowPassword}
                  >
                    {this.state.showPassword ? (
                      <FontAwesomeIcon icon={faEyeSlash} color="black" />
                    ) : (
                      <FontAwesomeIcon icon={faEye} color="black" />
                    )}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />

          <TextField
            id="confirmPassword"
            name="confirmPassword"
            type={this.state.showPasswordConfirmation ? "text" : "password"}
            label="Confirm Password"
            className={classes.textField}
            helperText={errors.confirmPassword}
            error={errors.confirmPassword ? true : false}
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    aria-label="Toggle password visibility"
                    onClick={this.handleClickShowPasswordConfirmation}
                  >
                    {this.state.showPasswordConfirmation ? (
                      <FontAwesomeIcon icon={faEyeSlash} color="black" />
                    ) : (
                      <FontAwesomeIcon icon={faEye} color="black" />
                    )}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Sign Up
          </Button>
        </form>
      </div>
    );
  }
}

SignUp.propTypes = {
  classes: PropTypes.object.isRequired,
  signUpUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  UI: state.UI
});

const mapActionsToProps = {
  signUpUser
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(withRouter(SignUp)));

import React, { Component } from "react";
import { withRouter } from "react-router";
import PropTypes from "prop-types";

// styles
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignInAlt,
  faEye,
  faEyeSlash
} from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/auth/AuthenticationStyles";

// redux
import { connect } from "react-redux";
import { loginUser } from "../../redux/actions/userActions";

class Login extends Component {
  state = {
    email: "",
    password: "",
    loading: false,
    errors: {},
    showPassword: false
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

  handleSubmit = evt => {
    evt.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData);
    this.props.history.push("/sentences");
  };

  render() {
    const { classes } = this.props;
    const { errors } = this.state;
    return (
      <div className={classes.root}>
        <DialogTitle id="login-dialog-title">
          <span className={classes.dialogIcon}>
            <FontAwesomeIcon icon={faSignInAlt} />
          </span>
          Login
        </DialogTitle>
        <form noValidate onSubmit={this.handleSubmit}>
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

          {errors.general && (
            <Typography variant="body1" className={classes.error}>
              {errors.general}
            </Typography>
          )}

          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user,
  UI: state.UI
});

export default connect(
  mapStateToProps,
  { loginUser }
)(withStyles(styles)(withRouter(Login)));

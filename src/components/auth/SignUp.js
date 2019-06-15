import React, { Component } from 'react'
import PropTypes from 'prop-types'

// styles
import withStyles from '@material-ui/core/styles/withStyles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import DialogTitle from '@material-ui/core/DialogTitle'
import Typography from '@material-ui/core/Typography'
import styles from '../../styles/auth/AuthenticationStyles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

// Redux
import { connect } from 'react-redux';
import { signUpUser } from '../../redux/actions/userActions'

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      loading: false,
      errors: {}
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors });
    }
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    const newUserData = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword
    };
    this.props.signUpUser(newUserData)
  }

  render() {
    const { classes } = this.props;
    const { errors } = this.state;
    return (
      <div className={classes.root}>
        <DialogTitle id="sign-up-dialog-title">
          <span className={classes.dialogIcon}>
            <FontAwesomeIcon icon={faUserPlus} />
          </span>Sign Up
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
            type="text"
            label="Password"
            className={classes.textField}
            helperText={errors.password}
            error={errors.password ? true : false}
            value={this.state.password}
            onChange={this.handleChange}
            fullWidth
          />

          <TextField 
            id="confirmPassword"
            name="confirmPassword"
            type="text"
            label="Confirm Password"
            className={classes.textField}
            helperText={errors.confirmPassword}
            error={errors.confirmPassword ? true : false}
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            fullWidth
          />

          {errors.general && (
            <Typography variant="body2" className={classes.error}>
              {errors.general}
            </Typography>
          )}

          <Button type="submit" variant="contained" color="primary" className={classes.button}>Sign Up</Button>
        </form>
      </div>
    )
  }
}

SignUp.propTypes = {
  classes: PropTypes.object.isRequired,
  signUpUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  user: state.user,
  UI: state.UI
})

const mapActionsToProps = {
  signUpUser
}

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(SignUp))
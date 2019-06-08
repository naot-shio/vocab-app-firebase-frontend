import React, { Component } from 'react'
import PropTypes from 'prop-types'

// styles
import withStyles from '@material-ui/core/styles/withStyles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import DialogTitle from '@material-ui/core/DialogTitle'
import Typography from '@material-ui/core/Typography'
import styles from '../../styles/AuthenticationStyles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'

// redux
import { connect } from 'react-redux'
import { loginUser } from '../../redux/actions/userActions'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loading: false,
      errors: {}
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors });
    }
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    const userData = {
      email: this.state.email,
      password: this.state.password
    }
    this.props.loginUser(userData)
  }

  render() {
    const { classes } = this.props;
    const { errors } = this.state
    return (
      <div className={classes.root}>
        <DialogTitle id="sign-up-dialog-title">
          <span className={classes.dialogIcon}>
            <FontAwesomeIcon icon={faSignInAlt} />
          </span>Sign Up
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
            type="password"
            label="Password"
            className={classes.textField} 
            helperText={errors.password}
            error={errors.password ? true : false}
            value={this.state.password} 
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

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  user: state.user,
  UI: state.UI
})

export default connect(mapStateToProps, { loginUser })(withStyles(styles)(Login))

import React, { Component } from 'react'
import PropTypes from 'prop-types'

// styles
import withStyles from '@material-ui/core/styles/withStyles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import DialogTitle from '@material-ui/core/DialogTitle';
import styles from '../../styles/AuthenticationStyles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loading: false,
      error: {}
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    alert('po')
  }

  render() {
    const { classes } = this.props;
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
            value={this.state.password} 
            onChange={this.handleChange}
            fullWidth  
          />

          <Button type="submit" variant="contained" color="primary" className={classes.button}>Sign Up</Button>
        </form>
      </div>
    )
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Login)

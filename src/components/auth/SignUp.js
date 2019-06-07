import React, { Component } from 'react'
import PropTypes from 'prop-types'

// styles
import withStyles from '@material-ui/core/styles/withStyles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import styles from '../../styles/SignUpStyles'

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      loading: false,
      error: {}
    }
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
      <div className={classes.SignUp}>
        <form noValidate onSubmit={this.handleSubmit}>
          <TextField 
            id="name" 
            name="name" 
            type="name" 
            label="User Name" 
            className={classes.textField} 
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

          <TextField 
            id="passwordConfirmation" 
            name="passwordConfirmation" 
            type="password" 
            label="Confirm Password" 
            className={classes.textField} 
            value={this.state.passwordConfirmation} 
            onChange={this.handleChange}
            fullWidth  
          />

          <Button type="submit" variant="contained" color="primary" className={classes.button}>Sign Up</Button>
  
        </form>
      </div>
    )
  }
}

SignUp.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SignUp)

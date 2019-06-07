import React, { Component } from 'react'
import PropTypes from 'prop-types'

// styles
import { withStyles } from '@material-ui/core/styles'
import styles from '../../styles/SignUpStyles'

class SignUp extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.SignUp}>
        <h1>Sign Up</h1>
      </div>
    )
  }
}

SignUp.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SignUp)

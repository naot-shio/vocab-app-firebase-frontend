import React, { Component } from 'react'
import SignUp from './SignUp'

// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUserPlus, faSignInAlt} from '@fortawesome/free-solid-svg-icons'

// styles
import withStyles from '@material-ui/core/styles/withStyles'
import Fab from '@material-ui/core/Fab'
import Tooltip from '@material-ui/core/Tooltip';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import styles from '../../styles/AuthenticationIconStyles'

class AuthenticationIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      openSignUpForm: false,
      openLoginForm: false
    }
    this.handleClickOpenSignUp = this.handleClickOpenSignUp.bind(this)
    this.handleCloseSignUp = this.handleCloseSignUp.bind(this)
    this.handleClickOpenLogin = this.handleClickOpenLogin.bind(this)
    this.handleCloseLogin = this.handleCloseLogin.bind(this)
  }

  handleClickOpenSignUp() {
    this.setState({ openSignUpForm: true })
  }

  handleClickOpenLogin() {
    this.setState({ openLoginForm: true })
  }

  handleCloseLogin() {
    this.setState({ openLoginForm: false})
  }

  handleCloseSignUp() {
    this.setState({ openSignUpForm: false})
  }
  

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
            style={{display: open ? "block" : "none"}}
            onClick={this.handleClickOpenSignUp}
          >
            <FontAwesomeIcon icon={faUserPlus} />
          </Fab>
        </Tooltip>
        
        <Tooltip title="Login" placement="left">
          <Fab
            color="secondary"
            aria-label="Add"
            className={classes.hiddenIcon}
            style={{display: open ? "block" : "none"}}
            onClick={this.handleClickOpenLogin}
          >
            <FontAwesomeIcon icon={faSignInAlt} />
          </Fab>
        </Tooltip>

        <Dialog open={openSignUpForm} aria-labelledby="sign-up-dialog-title" onClose={this.handleCloseSignUp}>
          <div className={classes.dialogSignUp}>
            <DialogTitle id="sign-up-dialog-title" className="dialogSignUpTitle">
              <span className={classes.dialogIcon}>
                <FontAwesomeIcon icon={faUserPlus} />
              </span>Sign Up
            </DialogTitle>
            <SignUp />
          </div>
        </Dialog>

        <Dialog open={openLoginForm} aria-labelledby="login-dialog-title" onClose={this.handleCloseLogin}>
          <DialogTitle id="login-dialog-title">Login!</DialogTitle>
        </Dialog>
      </div>
    )
  }
}

export default withStyles(styles)(AuthenticationIcon)

import React, { Component } from 'react'

// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUserPlus, faSignInAlt} from '@fortawesome/free-solid-svg-icons'

// styles
import withStyles from '@material-ui/core/styles/withStyles'
import Fab from '@material-ui/core/Fab'
import styles from '../../styles/AuthenticationIconStyles'

class AuthenticationIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  render() {
    const { classes } = this.props;
    const { open } = this.state;
    return (
      <div className={classes.icons}>
        <Fab 
          color="secondary" 
          aria-label="Add" 
          className={classes.icon} 
          onClick={() => this.setState({ open: !open })}
        >
          <FontAwesomeIcon icon={faUser} />
        </Fab>

        <Fab
          color="secondary"
          aria-label="Add"
          className={classes.hiddenIcon}
          style={{display: open ? "block" : "none"}}
        >
          <FontAwesomeIcon icon={faUserPlus} />
        </Fab>

        <Fab
          color="secondary"
          aria-label="Add"
          className={classes.hiddenIcon}
          style={{display: open ? "block" : "none"}}
        >
          <FontAwesomeIcon icon={faSignInAlt} /></Fab>
      </div>
    )
  }
}

export default withStyles(styles)(AuthenticationIcon)

import React from 'react'

// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUserPlus, faSignInAlt} from '@fortawesome/free-solid-svg-icons'

// styles
import withStyles from '@material-ui/core/styles/withStyles'
import Fab from '@material-ui/core/Fab'
import styles from '../../styles/AuthenticationIconStyles'

function AuthenticationIcon(props) {
  const { classes } = props;
  return (
    <div className={classes.icons}>
      <Fab color="secondary" aria-label="Add" className={classes.icon}><FontAwesomeIcon icon={faUser} /></Fab>
      <Fab color="secondary" aria-label="Add" className={classes.icon}><FontAwesomeIcon icon={faUserPlus} /></Fab>
      <Fab color="secondary" aria-label="Add" className={classes.icon}><FontAwesomeIcon icon={faSignInAlt} /></Fab>
    </div>
  )
}

export default withStyles(styles)(AuthenticationIcon)

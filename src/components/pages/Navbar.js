import React from 'react'
import { Link } from 'react-router-dom'
import CreateSentence from '../sentences/CreateSentence'
import Profile from './Profile'

// styles
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'
import styles from '../../styles/pages/NavbarStyles'

// Redux
import { connect } from 'react-redux'

function Navbar (props){
  const {classes} = props;
  const { authenticated } = props.user
  return (
    <AppBar position="static" className={classes.AppBar} color="default">
      <Toolbar className={classes.root}>
        <Typography variant="h6" className={classes.title}>
          <Link to="/words">VocabBuilder</Link>
        </Typography>
        
        {authenticated && <CreateSentence />}
        {authenticated && <Profile />}
      </Toolbar>
    </AppBar>
  );
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps)(withStyles(styles)(Navbar))

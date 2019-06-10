import React from 'react'
import { Link } from 'react-router-dom'
import CreateSentence from '../sentences/CreateSentence'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'
import styles from '../../styles/NavbarStyles'

function Navbar (props){
  const {classes} = props;
  return (
    <AppBar position="static" className={classes.AppBar}>
      <Toolbar className={classes.root}>
        <Typography variant="h6" className={classes.title}>
          <Link to="/">VocabBuilder</Link>
        </Typography>
        <CreateSentence />
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(Navbar)

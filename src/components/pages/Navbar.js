import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import useStyles from '../../styles/NavbarStyles'

function Navbar (){
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.AppBar}>
      <Toolbar className={classes.root}>
        <Typography variant="h6" className={classes.title}>
          <Link to="/">VocabBuilder</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar

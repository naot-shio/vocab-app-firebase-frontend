import React from 'react'
import AuthenticationIcon from '../auth/AuthenticationIcon'

import useStyles from '../../styles/HomeStyles'
import Grid from '@material-ui/core/Grid'

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.main}>
        <Grid container>
          <Grid item sm={2} xs={1} />
          <Grid item sm={8} xs={10}>
            <h1 className={classes.title}>VocabBuilder</h1>
            <h3 className={classes.subtitle}>Beef up your vocabulary</h3>
            <h3 className={classes.subtitle}>and</h3>
            <h3 className={classes.subtitle}>Enrich your life</h3>
          </Grid>
          <Grid item sm={2} xs={1}>
            <div className={classes.auth}>
              <AuthenticationIcon />
            </div>
          </Grid>
        </Grid>
      </div>
      
    </div>
  )
}

export default Home

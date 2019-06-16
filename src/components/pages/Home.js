import React from 'react'
import AuthenticationIcon from '../auth/AuthenticationIcon'

// styles
import useStyles from '../../styles/pages/HomeStyles'
import Grid from '@material-ui/core/Grid'

// Redux
import { connect } from 'react-redux'

function Home(props) {
  const classes = useStyles();
  const { authenticated } = props.user 
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
              {!authenticated &&  <AuthenticationIcon />}
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps)(Home)

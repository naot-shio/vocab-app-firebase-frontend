import React from 'react'
import { Link } from 'react-router-dom'
import AuthenticationIcon from '../auth/AuthenticationIcon'

// styles
import useStyles from '../../styles/pages/HomeStyles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

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
            <h1 className={classes.title}>ちょっと難しい英単語</h1>
            <h3 className={classes.subtitle}>ボキャブラリーを増やして</h3>
            <h3 className={classes.subtitle}>英語をもっと上手に</h3>
            <h3 className={classes.subtitle}>使えるようにしよう！</h3>

            <Link to="/words">
              <Button variant="contained" color="primary" className={classes.button}>
                はじめてみる
              </Button>
            </Link>
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

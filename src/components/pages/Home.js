import React from 'react'
import useStyles from '../../styles/HomeStyles'

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.main}>
        <h1>VocabBuilder</h1>
        <h3>Beef up your vocabulary</h3>
        <h3>and</h3>
        <h3>Enrich your life</h3>
      </div>
    </div>
  )
}

export default Home

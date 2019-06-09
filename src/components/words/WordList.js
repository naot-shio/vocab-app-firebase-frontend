import React, { Component } from 'react'
import axios from 'axios'
import AuthenticationIcon from '../auth/AuthenticationIcon'

// styles
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styles from '../../styles/WordListStyles'

class WordList extends Component {
  state = {
    sentences: null
  }
  componentDidMount() {
    axios.get('/sentences')
      .then(res => {
        this.setState({
          sentences: res.data
        })
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    const { classes } = this.props;
    let allSentences = this.state.sentences ? 
      this.state.sentences.map((word, index) =>
        <Card className={classes.Card} key={index}>
          <CardContent>
            <div className={classes.example}>
              <Typography variant="body2">
                {word.sentence} 
              </Typography>
             
              <Typography variant="body1">
                {word.translation}
              </Typography>     
            </div>
                  
          </CardContent>
        </Card>
      ) :
      <p>Oops no content</p>

    return (
      <Grid container>
        <Grid item sm={2} xs={1} />
        <Grid item sm={8} xs={10}>
         {allSentences}
        </Grid>
        <Grid item sm={2} xs={1}>
          <div className={classes.auth}>
            <AuthenticationIcon />
          </div>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(WordList)

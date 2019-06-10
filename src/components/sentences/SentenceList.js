
import React, { Component } from 'react'
import AuthenticationIcon from '../auth/AuthenticationIcon'
import wordMeaningPairs from '../../utils/wordMeaningPairs'

// styles
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styles from '../../styles/WordListStyles'

// Redux 
import { connect } from 'react-redux'
import { getSentences } from '../../redux/actions/dataActions'

class WordList extends Component {
  componentDidMount() {
    this.props.getSentences();
  }

  render() {
    const { classes } = this.props;
    const { loading, sentences } = this.props.data;
    let allSentences = !loading ? 
      sentences.map(sentence =>
        <Card className={classes.Card} key={sentence.sentenceId}>
          <CardContent>
            <Typography variant="body2">
              {sentence.sentence} 
            </Typography>
              
              {wordMeaningPairs(sentence).map((pair, index) =>
                <Typography key={index}>{pair.join(": ")}</Typography>
              )}
  
            <Typography variant="body1">
              {sentence.translation}
            </Typography>       
          </CardContent>
        </Card>
      ) :
      <p>Loading</p>

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

const mapStateToProps = state => ({
  data: state.data,
  UI: state.UI
})

const mapActionsToProps = {
  getSentences,
}

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(WordList))

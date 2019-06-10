
import React, { Component } from 'react'
import AuthenticationIcon from '../auth/AuthenticationIcon'
import wordMeaningPairs from '../../utils/wordMeaningPairs'

// styles
import withStyles from '@material-ui/core/styles/withStyles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Checkbox from '@material-ui/core/Checkbox'

import styles from '../../styles/SentenceListStyles'

// Redux 
import { connect } from 'react-redux'
import { getSentences } from '../../redux/actions/dataActions'

class WordList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.props.getSentences();
  }

  handleChange() {
    this.setState({ clicked: true })
  }

  render() {
    const { classes } = this.props;
    const { loading, sentences } = this.props.data;
    let allSentences = !loading ? 
      sentences.map((sentence, i) =>
        <Card className={classes.Card} key={sentence.sentenceId}>
          <CardContent>
            <Typography variant="h5" className={classes.sentence}>
              {i + 1}. {sentence.sentence} 
            </Typography>
              
              {wordMeaningPairs(sentence).map((pair, index) =>
                <div key={index} className={classes.pairs}>
                  <Typography className={classes.index}>{i+1}-{index+1}</Typography>
                  
                  <Checkbox onChange={this.handleChange} />
                  <Typography className={classes.english}>{pair[0]}: </Typography>
                              
                  <Typography>{pair[1]}</Typography>
                </div>
              )}
  
            <Typography variant="body1" className={classes.translation}>
              訳: {sentence.translation}
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

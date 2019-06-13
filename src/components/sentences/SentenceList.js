import React, { Component } from 'react'
import axios from 'axios'
import AuthenticationIcon from '../auth/AuthenticationIcon'
import Profile from '../pages/Profile'
import Sentence from './Sentence'

// styles
import withStyles from '@material-ui/core/styles/withStyles'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'
import styles from '../../styles/SentenceListStyles'

// Redux 
import { connect } from 'react-redux'
import { getSentences, updateSentence } from '../../redux/actions/dataActions'

class SentenceList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      keyword: '',
      displayOnlyLikedSentences: false
    }
  }

  componentDidMount() {
    this.props.getSentences(this.state.keyword);

    axios
      .get('https://googledictionaryapi.eu-gb.mybluemix.net/?define=go&lang=en')
      .then(res => {
        if (res.data) {
          let dataLength;
          if (res.data[0].meaning.adverb) {
            dataLength = res.data[0].meaning.adverb.length
            for (let i = 0; i < dataLength; i++) {
              console.log(res.data[0].meaning.adverb[i].definition)
              console.log(res.data[0].meaning.adverb[i].example)
            }
          }
          if (res.data[0].meaning.adjective) {
            dataLength = res.data[0].meaning.adjective.length
            for (let i = 0; i < dataLength; i++) {
              console.log(res.data[0].meaning.adjective[i].definition)
              console.log(res.data[0].meaning.adjective[i].example)
            }
          }
          if (res.data[0].meaning.verb) {
            dataLength = res.data[0].meaning.verb.length
            for (let i = 0; i < dataLength; i++) {
              console.log(res.data[0].meaning.verb[i].definition)
              console.log(res.data[0].meaning.verb[i].example)
            }
          }
          if (res.data[0].meaning.noun) {
            dataLength = res.data[0].meaning.verb.length
            for (let i = 0; i < dataLength; i++) {
              console.log(res.data[0].meaning.verb[i].definition)
              console.log(res.data[0].meaning.verb[i].example)
            }
          }
          if (res.data[0].meaning.exclamation) {
            dataLength = res.data[0].meaning.exclamation.length
            for (let i = 0; i < dataLength; i++) {
              console.log(res.data[0].meaning.exclamation[i].definition)
              console.log(res.data[0].meaning.exclamation[i].example)
            }
          }
          if (res.data[0].meaning.preposition) {
            dataLength = res.data[0].meaning.preposition.length
            for (let i = 0; i < dataLength; i++) {
              console.log(res.data[0].meaning.preposition[i].definition)
              console.log(res.data[0].meaning.preposition[i].example)
            }
          }
          if (res.data[0].meaning.conjugation) {
            dataLength = res.data[0].meaning.conjugation.length
            for (let i = 0; i < dataLength; i++) {
              console.log(res.data[0].meaning.conjugation[i].definition)
              console.log(res.data[0].meaning.conjugation[i].example)
            }
          }
        } 
      })
      .catch(err => console.log('not found'))
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleDisplayLikedSentences = () => {
    this.setState({
      displayOnlyLikedSentences: true
    })
  }

  handleDisplayAllSentences = () => {
    this.setState({
      displayOnlyLikedSentences: false
    })
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    this.props.getSentences(this.state.keyword);
    this.setState({ keyword: '' })
  }

  render() {
    const { classes } = this.props;
    const { authenticated } = this.props.user;
    const { sentences, loading } = this.props.data;

    const displayLikeButton =  this.state.displayOnlyLikedSentences ? (
      <IconButton onClick={this.handleDisplayAllSentences}>
        <FontAwesomeIcon icon={faHeartSolid} color="red" />
      </IconButton>
    ) : (
      <IconButton onClick={this.handleDisplayLikedSentences}>
        <FontAwesomeIcon icon={faHeartRegular} color="red" />
      </IconButton>
    )
    
    const isAuthenticated = authenticated ? <Profile /> : <AuthenticationIcon />;
    let getAllSentences = !loading ? (
      sentences.map((sentence, i) => <Sentence key={sentence.sentenceId} sentence={sentence} i={i} displayOnlyLikedSentences={this.state.displayOnlyLikedSentences}  />)
    ) : <p>Loading...</p>;

    return (
      <Grid container>
        <Grid item sm={2} xs={1}>
          {displayLikeButton}
        </Grid>

        <Grid item sm={8} xs={10}>
          <div className={classes.textField}>
            <form onSubmit={this.handleSubmit}>
              <TextField
                name="keyword"
                type="text"
                value={this.state.keyword}
                label="search"
                onChange={this.handleChange}
                fullWidth
              />
            </form>
          </div>
          
          {getAllSentences}
        </Grid>

        <Grid item sm={2} xs={1}>
          {isAuthenticated}
        </Grid>
      </Grid>      
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
  data: state.data
})

const mapActionsToProps = {
  getSentences,
  updateSentence
}

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(SentenceList))

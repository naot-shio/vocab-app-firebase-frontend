import React, { Component } from 'react'
import axios from 'axios'

// styles
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import withStyles from '@material-ui/core/styles/withStyles'
import styles from '../../styles/SentenceListStyles'

export class WordMeaningList extends Component {
  handleSearch = () => {
    alert(this.props.word.english)
    let searchedWord = this.props.word.english
    axios
      .get(`https://googledictionaryapi.eu-gb.mybluemix.net/?define=${searchedWord}&lang=en`)
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
  render() {
    const { index, i, word, classes } = this.props
    return (
      <div key={index} className={classes.word}>
        <Typography className={classes.indices}>{i+1}-{index+1}</Typography>
        <Typography className={classes.english}>
          <IconButton onClick={this.handleSearch}>
            <FontAwesomeIcon icon={faInfoCircle} className={classes.infoIcon} />
          </IconButton>
          
          {word.english}: 
        </Typography>
        <Typography className={classes.japanese}>{word.japanese}</Typography>
      </div>  
    )
  }
}

export default withStyles(styles)(WordMeaningList)

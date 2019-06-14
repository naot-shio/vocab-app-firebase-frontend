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
  state = {
    verb: [],
    noun: [],
    adverb: [],
    adjective: [],
    exclamation: [],
    preposition: [],
    conjugation: []
  }
  handleSearch = () => {
    alert(this.props.word.english)
    let searchedWord = this.props.word.english
    fetch(`https://googledictionaryapi.eu-gb.mybluemix.net/?define=${searchedWord}&lang=en`)
      .then(res => res.json())
      .then(result => {
        console.log(result[0])
        // if (result.data) {
        //   let dataLength;
        //   if (result.data[0].meaning.adverb) {
        //     dataLength = result.data[0].meaning.adverb.length
        //     let adverbList = [];
        //     for (let i = 0; i < dataLength; i++) {
        //       adverbList.push({
        //         definition: result.data[0].meaning.adverb[i].definition,
        //         example: result.data[0].meaning.adverb[i].example
        //       })
        //     }
        //     this.setState({
        //       adverb: adverbList
        //     })
        //     console.log(this.state.adverb)
        //   }

        //   if (result.data[0].meaning.adjective) {
        //     dataLength = result.data[0].meaning.adjective.length
        //     let adjectiveList = [];
        //     for (let i = 0; i < dataLength; i++) {
        //       adjectiveList.push({
        //         definition: result.data[0].meaning.adjective[i].definition,
        //         example: result.data[0].meaning.adjective[i].example
        //       })
        //     }
        //     this.setState({
        //       adjective: adjectiveList
        //     })
        //     console.log(this.state.adjective)
        //   }

        //   if (result.data[0].meaning.verb) {
        //     dataLength = result.data[0].meaning.verb.length
        //     let verbList = [];
        //     for (let i = 0; i < dataLength; i++) {
        //       verbList.push({
        //         definition: result.data[0].meaning.verb[i].definition,
        //         example: result.data[0].meaning.verb[i].example
        //       })
        //     }
        //     this.setState({
        //       verb: verbList
        //     })
        //     console.log(this.state.verb)
        //   }

        //   if (result.data[0].meaning.noun) {
        //     if (result.data[0].meaning.noun.definition === undefined) {
        //       console.log('not found')
        //       return 'Not found'
        //     }
        //     dataLength = result.data[0].meaning.noun.length
        //     let nounList = [];
        //     for (let i = 0; i < dataLength; i++) {
        //       nounList.push({
        //         definition: result.data[0].meaning.noun[i].definition,
        //         example: result.data[0].meaning.noun[i].example
        //       })
        //     }
        //     this.setState({
        //       noun: nounList
        //     })
        //     console.log(this.state.noun)
        //   }

        //   if (result.data[0].meaning.exclamation) {
        //     dataLength = result.data[0].meaning.exclamation.length
        //     let exclamationList = [];
        //     for (let i = 0; i < dataLength; i++) {
        //       exclamationList.push({
        //         definition: result.data[0].meaning.exclamation[i].definition,
        //         example: result.data[0].meaning.exclamation[i].example
        //       })
        //     }
        //     this.setState({
        //       exclamation: exclamationList
        //     })
        //     console.log(this.state.exclamation)
        //   }

        //   if (result.data[0].meaning.preposition) {
        //     dataLength = result.data[0].meaning.preposition.length
        //     let prepositionList = [];
        //     for (let i = 0; i < dataLength; i++) {
        //       prepositionList.push({
        //         definition: result.data[0].meaning.preposition[i].definition,
        //         example: result.data[0].meaning.preposition[i].example
        //       })
        //     }
        //     this.setState({
        //       preposition: prepositionList
        //     })
        //     console.log(this.state.preposition)
        //   }

        //   if (result.data[0].meaning.conjugation) {
        //     dataLength = result.data[0].meaning.conjugation.length
        //     let conjugationList = [];
        //     for (let i = 0; i < dataLength; i++) {
        //       conjugationList.push({
        //         definition: result.data[0].meaning.conjugation[i].definition,
        //         example: result.data[0].meaning.conjugation[i].example
        //       })
        //     }
        //     this.setState({
        //       conjugation: conjugationList
        //     })
        //     console.log(this.state.conjugation)
        //   }
        //   console.log('hello')
        // } 
      })
      .catch(err => console.log('not found'))




      // })
      // .catch(err => console.log('not found'))
        // },
        // if (res.data) {
        //   let dataLength;
        //   if (res.data[0].meaning.adverb) {
        //     dataLength = res.data[0].meaning.adverb.length
        //     let adverbList = [];
        //     for (let i = 0; i < dataLength; i++) {
        //       adverbList.push({
        //         definition: res.data[0].meaning.adverb[i].definition,
        //         example: res.data[0].meaning.adverb[i].example
        //       })
        //     }
        //     this.setState({
        //       adverb: adverbList
        //     })
        //     console.log(this.state.adverb)
        //   }

        //   if (res.data[0].meaning.adjective) {
        //     dataLength = res.data[0].meaning.adjective.length
        //     let adjectiveList = [];
        //     for (let i = 0; i < dataLength; i++) {
        //       adjectiveList.push({
        //         definition: res.data[0].meaning.adjective[i].definition,
        //         example: res.data[0].meaning.adjective[i].example
        //       })
        //     }
        //     this.setState({
        //       adjective: adjectiveList
        //     })
        //     console.log(this.state.adjective)
        //   }

        //   if (res.data[0].meaning.verb) {
        //     dataLength = res.data[0].meaning.verb.length
        //     let verbList = [];
        //     for (let i = 0; i < dataLength; i++) {
        //       verbList.push({
        //         definition: res.data[0].meaning.verb[i].definition,
        //         example: res.data[0].meaning.verb[i].example
        //       })
        //     }
        //     this.setState({
        //       verb: verbList
        //     })
        //     console.log(this.state.verb)
        //   }

        //   if (res.data[0].meaning.noun) {
        //     if (res.data[0].meaning.noun.definition === undefined) {
        //       console.log('not found')
        //       return 'Not found'
        //     }
        //     dataLength = res.data[0].meaning.noun.length
        //     let nounList = [];
        //     for (let i = 0; i < dataLength; i++) {
        //       nounList.push({
        //         definition: res.data[0].meaning.noun[i].definition,
        //         example: res.data[0].meaning.noun[i].example
        //       })
        //     }
        //     this.setState({
        //       noun: nounList
        //     })
        //     console.log(this.state.noun)
        //   }

        //   if (res.data[0].meaning.exclamation) {
        //     dataLength = res.data[0].meaning.exclamation.length
        //     let exclamationList = [];
        //     for (let i = 0; i < dataLength; i++) {
        //       exclamationList.push({
        //         definition: res.data[0].meaning.exclamation[i].definition,
        //         example: res.data[0].meaning.exclamation[i].example
        //       })
        //     }
        //     this.setState({
        //       exclamation: exclamationList
        //     })
        //     console.log(this.state.exclamation)
        //   }

        //   if (res.data[0].meaning.preposition) {
        //     dataLength = res.data[0].meaning.preposition.length
        //     let prepositionList = [];
        //     for (let i = 0; i < dataLength; i++) {
        //       prepositionList.push({
        //         definition: res.data[0].meaning.preposition[i].definition,
        //         example: res.data[0].meaning.preposition[i].example
        //       })
        //     }
        //     this.setState({
        //       preposition: prepositionList
        //     })
        //     console.log(this.state.preposition)
        //   }

        //   if (res.data[0].meaning.conjugation) {
        //     dataLength = res.data[0].meaning.conjugation.length
        //     let conjugationList = [];
        //     for (let i = 0; i < dataLength; i++) {
        //       conjugationList.push({
        //         definition: res.data[0].meaning.conjugation[i].definition,
        //         example: res.data[0].meaning.conjugation[i].example
        //       })
        //     }
        //     this.setState({
        //       conjugation: conjugationList
        //     })
        //     console.log(this.state.conjugation)
        //   }
        // } 
      // })
      // .catch(err => console.log('not found'))
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

import React, { Component } from 'react'
import IconButton from '@material-ui/core/IconButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

export class Dictionary extends Component {
  state = {
    verb: [],
    noun: [],
    adverb: [],
    adjective: [],
    exclamation: [],
    preposition: [],
    conjugation: []
  }

  componentDidMount() {
    let searchedWord = this.props.word
    fetch(`https://googledictionaryapi.eu-gb.mybluemix.net/?define=${searchedWord}&lang=en`)
      .then(res => res.json())
      .then(result => {
        if (result[0].meaning) {
          let dataLength;
          if (result[0].meaning.adverb) {
            dataLength = result[0].meaning.adverb.length
            let adverbList = [];
            for (let i = 0; i < dataLength; i++) {
              adverbList.push({
                definition: result[0].meaning.adverb[i].definition,
                example: result[0].meaning.adverb[i].example
              })
            }
            this.setState({
              adverb: adverbList
            })
            console.log(this.state.adverb)
          }

          if (result[0].meaning.adjective) {
            dataLength = result[0].meaning.adjective.length
            let adjectiveList = [];
            for (let i = 0; i < dataLength; i++) {
              adjectiveList.push({
                definition: result[0].meaning.adjective[i].definition,
                example: result[0].meaning.adjective[i].example
              })
            }
            this.setState({
              adjective: adjectiveList
            })
            console.log(this.state.adjective)
          }

          if (result[0].meaning.verb) {
            dataLength = result[0].meaning.verb.length
            let verbList = [];
            for (let i = 0; i < dataLength; i++) {
              verbList.push({
                definition: result[0].meaning.verb[i].definition,
                example: result[0].meaning.verb[i].example
              })
            }
            this.setState({
              verb: verbList
            })
            console.log(this.state.verb)
          }

          if (result[0].meaning.noun) {
            dataLength = result[0].meaning.noun.length
            let nounList = [];
            for (let i = 0; i < dataLength; i++) {
              nounList.push({
                definition: result[0].meaning.noun[i].definition,
                example: result[0].meaning.noun[i].example
              })
            }
            this.setState({
              noun: nounList
            })
            console.log(this.state.noun)
          }

          if (result[0].meaning.exclamation) {
            dataLength = result[0].meaning.exclamation.length
            let exclamationList = [];
            for (let i = 0; i < dataLength; i++) {
              exclamationList.push({
                definition: result[0].meaning.exclamation[i].definition,
                example: result[0].meaning.exclamation[i].example
              })
            }
            this.setState({
              exclamation: exclamationList
            })
            console.log(this.state.exclamation)
          }

          if (result[0].meaning.preposition) {
            dataLength = result[0].meaning.preposition.length
            let prepositionList = [];
            for (let i = 0; i < dataLength; i++) {
              prepositionList.push({
                definition: result[0].meaning.preposition[i].definition,
                example: result[0].meaning.preposition[i].example
              })
            }
            this.setState({
              preposition: prepositionList
            })
            console.log(this.state.preposition)
          }

          if (result[0].meaning.conjugation) {
            dataLength = result[0].meaning.conjugation.length
            let conjugationList = [];
            for (let i = 0; i < dataLength; i++) {
              conjugationList.push({
                definition: result[0].meaning.conjugation[i].definition,
                example: result[0].meaning.conjugation[i].example
              })
            }
            this.setState({
              conjugation: conjugationList
            })
            console.log(this.state.conjugation)
          }
        }
        console.log(this.state)
      })
      .catch(err => console.log('hello error is here!', err))
  }

  render() {
    return (
      <>
      <h1>{this.props.word}</h1>
      
      {this.state.noun.length > 0 ? 
        this.state.noun.map(noun => (
          <>
          <p>{noun.definition}</p>
          <p>{noun.example}</p>
          </>
        )) :
        <p>Loading</p>
        }
      {this.state.verb.length > 0 ? 
        this.state.verb.map(verb => (
          <>
          <p>{verb.definition}</p>
          <p>{verb.example}</p>
          </>
        )) :
        <p>Loading</p>
        }
      {this.state.adjective.length > 0 ? 
        this.state.adjective.map(adjective => (
          <>
          <p>{adjective.definition}</p>
          <p>{adjective.example}</p>
          </>
        )) :
        <p>Loading</p>
        }
      {this.state.adverb.length > 0 ? 
        this.state.adverb.map(adverb => (
          <>
          <p>{adverb.definition}</p>
          <p>{adverb.example}</p>
          </>
        )) :
        <p>Loading</p>
        }
      {this.state.conjugation.length > 0 ? 
        this.state.conjugation.map(conjugation => (
          <>
          <p>{conjugation.definition}</p>
          <p>{conjugation.example}</p>
          </>
        )) :
        <p>Loading</p>
        }
      {this.state.exclamation.length > 0 ? 
        this.state.exclamation.map(exclamation => (
          <>
          <p>{exclamation.definition}</p>
          <p>{exclamation.example}</p>
          </>
        )) :
        <p>Loading</p>
        }
      {this.state.preposition.length > 0 ? 
        this.state.preposition.map(preposition => (
          <>
          <p>{preposition.definition}</p>
          <p>{preposition.example}</p>
          </>
        )) :
        <p>Loading</p>
        }
      </>
    )
  }
}

export default Dictionary


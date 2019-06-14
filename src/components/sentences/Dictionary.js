import React, { Component } from 'react'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import CircularProgress from '@material-ui/core/CircularProgress';

export class Dictionary extends Component {
  state = {
    loading: true,
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
          let dataLength, example, exampleCapitalized;
          if (result[0].meaning.adverb) {
            dataLength = result[0].meaning.adverb.length
            let adverbList = [];
            for (let i = 0; i < dataLength; i++) {
              example = result[0].meaning.adverb[i].example
              exampleCapitalized = example.charAt(0).toUpperCase() + example.slice(1)
              adverbList.push({
                definition: result[0].meaning.adverb[i].definition,
                example: exampleCapitalized
              })
            }
            this.setState({
              adverb: adverbList
            })
          }

          if (result[0].meaning.adjective) {
            dataLength = result[0].meaning.adjective.length
            let adjectiveList = [];
            for (let i = 0; i < dataLength; i++) {
              example = result[0].meaning.adjective[i].example
              exampleCapitalized = example.charAt(0).toUpperCase() + example.slice(1)
              adjectiveList.push({
                definition: result[0].meaning.adjective[i].definition,
                example: exampleCapitalized
              })
            }
            this.setState({
              adjective: adjectiveList
            })
          }

          if (result[0].meaning.verb) {
            dataLength = result[0].meaning.verb.length
            let verbList = [];
            for (let i = 0; i < dataLength; i++) {
              example = result[0].meaning.verb[i].example
              exampleCapitalized = example.charAt(0).toUpperCase() + example.slice(1)
              verbList.push({
                definition: result[0].meaning.verb[i].definition,
                example: exampleCapitalized
              })
            }
            this.setState({
              verb: verbList
            })
          }

          if (result[0].meaning.noun) {
            dataLength = result[0].meaning.noun.length
            let nounList = [];
            for (let i = 0; i < dataLength; i++) {
              example = result[0].meaning.noun[i].example
              exampleCapitalized = example.charAt(0).toUpperCase() + example.slice(1)
              nounList.push({
                definition: result[0].meaning.noun[i].definition,
                example: exampleCapitalized
              })
            }
            this.setState({
              noun: nounList
            })
          }

          if (result[0].meaning.exclamation) {
            dataLength = result[0].meaning.exclamation.length
            let exclamationList = [];
            for (let i = 0; i < dataLength; i++) {
              example = result[0].meaning.exclamation[i].example
              exampleCapitalized = example.charAt(0).toUpperCase() + example.slice(1)
              exclamationList.push({
                definition: result[0].meaning.exclamation[i].definition,
                example: exampleCapitalized
              })
            }
            this.setState({
              exclamation: exclamationList
            })
          }

          if (result[0].meaning.preposition) {
            dataLength = result[0].meaning.preposition.length
            let prepositionList = [];
            for (let i = 0; i < dataLength; i++) {
              example = result[0].meaning.preposition[i].example
              exampleCapitalized = example.charAt(0).toUpperCase() + example.slice(1)
              prepositionList.push({
                definition: result[0].meaning.preposition[i].definition,
                example: exampleCapitalized
              })
            }
            this.setState({
              preposition: prepositionList
            })
          }

          if (result[0].meaning.conjugation) {
            dataLength = result[0].meaning.conjugation.length
            let conjugationList = [];
            for (let i = 0; i < dataLength; i++) {
              example = result[0].meaning.conjugation[i].example
              exampleCapitalized = example.charAt(0).toUpperCase() + example.slice(1)
              conjugationList.push({
                definition: result[0].meaning.conjugation[i].definition,
                example: exampleCapitalized
              })
            }
            this.setState({
              conjugation: conjugationList
            })
          }
        }
      })
      .then(() => {
        this.setState({ loading: false })
      })
      .catch(err => console.log(err))
  }

  render() {
    const showWordAndMeanings = this.state.loading ? 
      <CircularProgress  size={150} /> : (
      <>
        {this.state.noun.length > 0 &&
          this.state.noun.map((noun, i) => (
            <DialogContent key={i}>
            <DialogContentText>名詞{i+1}: {noun.definition}</DialogContentText>
            <DialogContentText>例文{i+1}: {noun.example}</DialogContentText>
            </DialogContent>
          ))
        }
        {this.state.verb.length > 0 &&
          this.state.verb.map((verb, i) => (
            <DialogContent key={i}>
            <DialogContentText>動詞{i+1}: {verb.definition}</DialogContentText>
            <DialogContentText>例文{i+1}: {verb.example}</DialogContentText>
            </DialogContent>
          ))
        }
        {this.state.adjective.length > 0 &&
          this.state.adjective.map((adjective, i) => (
            <DialogContent key={i}>
            <DialogContentText>形容詞{i+1}: {adjective.definition}</DialogContentText>
            <DialogContentText>例文{i+1}: {adjective.example}</DialogContentText>
            </DialogContent>
          ))
        }
        {this.state.adverb.length > 0 &&
          this.state.adverb.map((adverb, i) => (
            <DialogContent key={i}>
            <DialogContentText>副詞{i+1}: {adverb.definition}</DialogContentText>
            <DialogContentText>例文{i+1}: {adverb.example}</DialogContentText>
            </DialogContent>
          ))
        }
        {this.state.conjugation.length > 0 &&
          this.state.conjugation.map((conjugation, i) => (
            <DialogContent key={i}>
            <DialogContentText>接続し{i+1}: {conjugation.definition}</DialogContentText>
            <DialogContentText>例文{i+1}: {conjugation.example}</DialogContentText>
            </DialogContent>
          ))
        }
        {this.state.exclamation.length > 0 &&
          this.state.exclamation.map((exclamation, i) => (
            <DialogContent key={i}>
            <DialogContentText>感嘆{i+1}: {exclamation.definition}</DialogContentText>
            <DialogContentText>例文{i+1}: {exclamation.example}</DialogContentText>
            </DialogContent>
          ))
        }
        {this.state.preposition.length > 0 &&
          this.state.preposition.map((preposition, i) => (
            <DialogContent key={i}>
            <DialogContentText>前置詞{i+1}: {preposition.definition}</DialogContentText>
            <DialogContentText>例文{i+1}: {preposition.example}</DialogContentText>
            </DialogContent>
          ))
        }
      </>
    )
    return (
      <>
        <DialogTitle>{this.props.word}</DialogTitle>
        {showWordAndMeanings}
      </>
    )
  }
}

export default Dictionary

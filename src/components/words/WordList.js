import React, { Component } from 'react'
import axios from 'axios'

class WordList extends Component {
  state = {
    words: null
  }
  componentDidMount() {
    axios.get('/words')
      .then(res => {
        this.setState({
          words: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    let allWords = this.state.words ? 
      this.state.words.map((word, index) =>
        <div key={index}>
        <p>{word.english}</p>
        <p>{word.japanese}</p>
        <p>{word.sentence}</p>
        <p>{word.translation}</p>
        </div>
      ) :
      <p>Oops no content</p>

    return (
      <div>
        {allWords} 
      </div>
    )
  }
}

export default WordList

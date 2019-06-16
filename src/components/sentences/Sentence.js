import React, { Component } from 'react'
import SentenceDetails from './SentenceDetails'

// Redux
import { connect } from 'react-redux'

class Sentence extends Component {
  render() {
    const { sentence, i, displayOnlyLikedSentences } = this.props

    const showOnlyLikedSentences = 
        displayOnlyLikedSentences
        && this.props.user.likes 
        && this.props.user.likes.find(like => like.sentenceId === this.props.sentence.sentenceId) 
        && <SentenceDetails 
              sentence={sentence} 
              i={i} 
            /> 
    
    const showAllSentences = 
        !displayOnlyLikedSentences 
        && <SentenceDetails 
              sentence={sentence} 
              i={i} 
            /> 
      
    return (
      <>
        {showOnlyLikedSentences}
        {showAllSentences}
      </>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps)(Sentence)

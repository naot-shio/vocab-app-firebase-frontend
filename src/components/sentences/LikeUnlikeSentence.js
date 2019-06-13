import React, { Component } from 'react'

// styles
import IconButton from '@material-ui/core/IconButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'


// Redux
import { connect } from 'react-redux'
import { likeSentence, unlikeSentence} from '../../redux/actions/dataActions'

class LikeUnlikeSentence extends Component {
  likedSentence = () => {
    if (this.props.user.likes && this.props.user.likes.find(like => like.sentenceId === this.props.sentence.sentenceId))
      return true
    return false
  };

  likeSentence = () => {
    this.props.likeSentence(this.props.sentence.sentenceId);
  }

  unlikeSentence = () => {
    this.props.unlikeSentence(this.props.sentence.sentenceId);
  }

  render() {
    const likeButton = () =>  this.likedSentence() ? (
      <IconButton onClick={this.unlikeSentence}>
        <FontAwesomeIcon icon={faHeartSolid} />
      </IconButton>
    ) : (
      <IconButton onClick={this.likeSentence}>
        <FontAwesomeIcon icon={faHeartRegular} />
      </IconButton>
    )

    return {likeButton}
  }
}

const mapStateToProps = state => ({
  data: state.data,
  user: state.user
})

const mapActionsToProps = {
  likeSentence,
  unlikeSentence
}

export default connect(mapStateToProps, mapActionsToProps)(LikeUnlikeSentence)

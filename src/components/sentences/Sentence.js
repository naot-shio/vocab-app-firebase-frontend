import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import DeleteSentence from './DeleteSentence'

// styles
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Fab from '@material-ui/core/Fab'
import IconButton from '@material-ui/core/IconButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'
import withStyles from '@material-ui/core/styles/withStyles'
import styles from '../../styles/SentenceListStyles'

// Redux
import { connect } from 'react-redux'
import { likeSentence, unlikeSentence } from '../../redux/actions/dataActions'

class Sentence extends Component {
  sentenceLiked = () => {
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
    const { classes, sentence, i } = this.props
    const { authenticated, credentials: { name } } = this.props.user;

    const likeButton =  this.sentenceLiked() ? (
      <IconButton onClick={this.unlikeSentence}>
        <FontAwesomeIcon icon={faHeartSolid} />
      </IconButton>
    ) : (
      <IconButton onClick={this.likeSentence}>
        <FontAwesomeIcon icon={faHeartRegular} />
      </IconButton>
    )
    
    const editDeleteButton = (sentence) => 
      (authenticated && sentence.userName === name) && 
        <div className={classes.icons}>
          <Fab
            color="primary"
            aria-label="Edit"
            size="small"
          >
            <Link to={`/word/${sentence.sentenceId}`} onClick={e => e.stopPropagation()}>
              <FontAwesomeIcon icon={faEdit} />
            </Link>
          </Fab>
          <DeleteSentence sentenceId={sentence.sentenceId} />
        </div>

    return (
      <>
        <Card className={classes.Card} key={sentence.sentenceId}>
          <CardContent>
            <Typography variant="h5" className={classes.sentence}>
              {i + 1}. {sentence.sentence} 
            </Typography>

            {authenticated &&
              <div>
                {likeButton}
              </div>
            }

            {sentence.words.map((word, index) => 
              <div key={index} className={classes.word}>
                <Typography className={classes.indices}>{i+1}-{index+1}</Typography>
                <Typography className={classes.english}>{word.english}: </Typography>
                <Typography className={classes.japanese}>{word.japanese}</Typography>
              </div>  
            )}
  
            <Typography variant="body1" className={classes.translation}>
              訳: {sentence.translation}
            </Typography>
                      
            {editDeleteButton(sentence)}
          </CardContent>
        </Card>
      </>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

const mapActionsToProps = {
  likeSentence,
  unlikeSentence
}

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(Sentence))

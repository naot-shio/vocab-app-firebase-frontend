import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import DeleteSentence from './DeleteSentence'

// styles
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Fab from '@material-ui/core/Fab'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons'
import withStyles from '@material-ui/core/styles/withStyles'
import styles from '../../styles/SentenceListStyles'

class AllSentences extends Component {
  render() {
    const { classes, sentences, loading, authenticated, name } = this.props
    return (
      <>
        {
          !loading ? 
          sentences.map((sentence, i) =>
            <Card className={classes.Card} key={sentence.sentenceId}>
              <CardContent>
                <Typography variant="h5" className={classes.sentence}>
                  {i + 1}. {sentence.sentence} 
                </Typography>

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
                          
                { (authenticated && sentence.userName === name) &&  
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
                }
              </CardContent>
            </Card>
          ) :
          <p>Loading</p>
        }
      </>
    )
  }
}

export default withStyles(styles)(AllSentences)

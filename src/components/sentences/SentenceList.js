
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AuthenticationIcon from '../auth/AuthenticationIcon'
import Profile from '../pages/Profile'

// styles
import withStyles from '@material-ui/core/styles/withStyles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Checkbox from '@material-ui/core/Checkbox'
import DialogActions from '@material-ui/core/DialogActions'
import Dialog from '@material-ui/core/Dialog'
import Button from '@material-ui/core/Button'
import Fab from '@material-ui/core/Fab'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons'
import styles from '../../styles/SentenceListStyles'

// Redux 
import { connect } from 'react-redux'
import { getSentences, updateSentence } from '../../redux/actions/dataActions'

class WordList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      open: false,
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleClickToggle = this.handleClickToggle.bind(this) 
  }

  componentDidMount() {
    this.props.getSentences();
  }

  handleClick() {
    this.setState({ clicked: true })
  }

  handleClickToggle() {
    this.setState({ open: !this.state.open })
  }

  render() {
    const { classes } = this.props;
    const { loading, sentences } = this.props.data;
    let allSentences = !loading ? 
      sentences.map((sentence, i) =>
        <Card className={classes.Card} key={sentence.sentenceId}>
          <CardContent>
            <Typography variant="h5" className={classes.sentence}>
              {i + 1}. {sentence.sentence} 
            </Typography>

              {sentence.words.map((word, index) => 
                <div key={index} className={classes.word}>
                  <Typography className={classes.indices}>{i+1}-{index+1}</Typography>
                  
                  <Checkbox onChange={this.handleClick} />
                  <Typography className={classes.english}>{word.english}: </Typography>
                  <Typography className={classes.japanese}>{word.japanese}</Typography>
                </div>  
              )}
  
            <Typography variant="body1" className={classes.translation}>
              訳: {sentence.translation}
            </Typography>
           
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
              <Fab
                color="secondary"
                aria-label="Delete"
                className={classes.deleteIcon}
                size="small"
              >
                <FontAwesomeIcon icon={faTrashAlt} />
              </Fab>
            </div>
          </CardContent>
        </Card>
      ) :
      <p>Loading</p>

    return (
      <Grid container>
        <Grid item sm={2} xs={1}>    
          <Button variant="outlined" color="primary" onClick={this.handleClickToggle}>
            Open responsive dialog
          </Button>
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="responsive-dialog-title"
          >
            <Profile />
            
            <DialogActions>
              <Button onClick={this.handleClickToggle} color="primary">
                X
              </Button>
            </DialogActions>
          </Dialog>
        </Grid>

        <Grid item sm={8} xs={10}>
          {allSentences} 
        </Grid>
        <Grid item sm={2} xs={1}>
          <div className={classes.auth}>
            <AuthenticationIcon />
          </div>
        </Grid>
      </Grid>
    )
  }
}

const mapStateToProps = state => ({
  data: state.data,
  UI: state.UI,
  user: state.user
})

const mapActionsToProps = {
  getSentences,
  updateSentence
}

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(WordList))

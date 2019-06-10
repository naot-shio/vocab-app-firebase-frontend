import React, { Component } from 'react'

//styles 
import withStyles from '@material-ui/core/styles/withStyles'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import styles from '../../styles/CreateSentenceStyles'


// Redux
import { connect } from 'react-redux'
import { postSentence } from '../../redux/actions/dataActions'

export class CreateSentence extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      sentence: '',
      translation: '',
      word: '',
      meaning: '',
      errors: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false })
  }

  handleChange(evt) {
    this.setState({[evt.target.name]: evt.target.value})
  }

  handleSubmit(evt) {
    evt.preventDefault();
    console.log(this.state)
    const newWord = {
      sentence: this.state.sentence,
      translation: this.state.translation,
      words: [this.state.word],
      meanings: [this.state.meaning]
    }
    this.props.postSentence(newWord);
  }

  render() {
    const { errors, open } = this.state;
    const { classes } = this.props;
    return (
      <>
        <Button onClick={this.handleOpen} className={classes.button}>
          <FontAwesomeIcon icon={faPlusSquare} />
        </Button>

        <Dialog
          open={open}
          onClose={this.handleClose}
          fullWidth
          maxWidth="sm"
        >
          <DialogTitle>Create a new sentence</DialogTitle>
          <DialogContent>
            <form onSubmit={this.handleSubmit}>
              <TextField
                name="sentence"
                type="text"
                value={this.state.sentence}
                label="sentence"
                className={classes.textField}
                onChange={this.handleChange}
                fullWidth
              />

              <TextField
                name="translation"
                type="text"
                value={this.state.translation}
                label="translation"
                className={classes.textField}
                onChange={this.handleChange}
                fullWidth
              />

              <TextField
                name="word"
                type="text"
                value={this.state.word}
                label="word"
                className={classes.textField}
                onChange={this.handleChange}
                fullWidth
              />
              <TextField
                name="meaning"
                type="text"
                value={this.state.meaning}
                label="meaning"
                className={classes.textField}
                onChange={this.handleChange}
                fullWidth
              />


              <Button type="submit" variant="contained" color="primary" className={classes.submitButton}>
                Submit!
              </Button>

            </form>
          </DialogContent>
        </Dialog>
      </>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.UI.loading
})

export default connect(mapStateToProps, { postSentence })(withStyles(styles)(CreateSentence))

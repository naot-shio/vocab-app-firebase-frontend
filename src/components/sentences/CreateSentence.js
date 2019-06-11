import React, { Component } from 'react'

//styles 
import withStyles from '@material-ui/core/styles/withStyles'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Fab from '@material-ui/core/Fab'
import Grid from '@material-ui/core/Grid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faPlus } from '@fortawesome/free-solid-svg-icons'
import styles from '../../styles/CreateSentenceStyles'
import '../../styles/CreateSentenceForm.css'


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
      words: [{english: "", japanese: ""}],
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
    if (evt.target.name === 'sentence' || evt.target.name === 'translation') {
      console.log('oi')
      this.setState({[evt.target.name]: evt.target.value})
    } else {
      let words = [...this.state.words]
      words[evt.target.dataset.id][evt.target.className] = evt.target.value
      this.setState({ words }, () => console.log(this.state.words))
    }
  }
  
  addWord = (evt) => {
    this.setState(prevState => ({
      words: [...prevState.words, {english: '', japanese: ''}]
    }))
  }

  handleSubmit(evt) {
    evt.preventDefault();
    console.log(this.state)
    const newWord = {
      sentence: this.state.sentence,
      translation: this.state.translation,
      words: this.state.words,
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
            <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
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
              <Grid container>
                <Grid item xs={9}>
                  {this.state.words.map((val, idx) => {
                    let englishId = `english-${idx}`, japaneseId = `english-${idx}`
                    return (
                      <div key={idx} className={classes.englishJapaneseInputForm}>
                        <input
                          type="text"
                          name={englishId}
                          data-id={idx}
                          id={englishId}
                          className="english"
                          placeholder={`English: ${idx + 1}`}
                        />
                    
                        <input
                          type="text"
                          name={japaneseId}
                          data-id={idx}
                          id={japaneseId}
                          className="japanese"
                          placeholder={`Japanese: ${idx + 1}`}
                        />
                      </div>
                    )
                  })}
                </Grid>

                <Grid item xs={3}>
                  <div className={classes.addWord}>
                    <Fab 
                      color="secondary" 
                      aria-label="Add" 
                      onClick={this.addWord}
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </Fab>
                  </div>
                </Grid>
              </Grid>

              <Button 
                type="submit" 
                variant="contained" 
                color="primary" 
                className={classes.submitButton}
              >
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

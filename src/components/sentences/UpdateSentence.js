import React, { Component } from 'react'

// styles
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Fab from '@material-ui/core/Fab'
import withStyles from '@material-ui/core/styles/withStyles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

// Redux
import { connect } from 'react-redux'
import { getSentence, updateSentence } from '../../redux/actions/dataActions'

const styles = {}

class UpdateSentence extends Component {
  constructor(props) {
    super(props);
    this. state = {
      sentence: '',
      translation: '',
      words: [{english: "", japanese: ""}],
      errors: {}
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.props.getSentence(this.props.sentenceId);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    alert('U clicked me')
  }

  handleSubmit(evt) {
    evt.preventDefault();
    console.log(this.state)
    const word = {
      sentence: this.state.sentence,
      translation: this.state.translation,
      words: this.state.words,
    }
    this.props.updateSentence(this.props.sentenceId, word);
  }

  handleChange(evt) {
    if (evt.target.name === 'sentence' || evt.target.name === 'translation') {
      this.setState({[evt.target.name]: evt.target.value})
    } else {
      let words = [...this.state.words]
      words[evt.target.dataset.id][evt.target.className] = evt.target.value
      this.setState({ words }, () => console.log(this.state.words))
    }
  }
 
  render() {
    const { classes } = this.props
    const { sentence } = this.props.data
    const { loading } = this.props.UI

    return (
      <div>
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
  
        
      </div>
    )
  }
}

const mapStateToProps = state => ({
  data: state.data,
  UI: state.UI
})

export default connect(mapStateToProps, { getSentence, updateSentence })(withStyles(styles)(UpdateSentence))

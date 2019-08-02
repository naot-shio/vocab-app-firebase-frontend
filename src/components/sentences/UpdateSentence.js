import React, { Component } from "react";
import axios from "axios";
import SentenceForm from "./SentenceForm";

// styles
import Paper from "@material-ui/core/Paper";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "../../styles/sentences/UpdateSentenceStyles";

// Redux
import { connect } from "react-redux";
import { updateSentence } from "../../redux/actions/dataActions";

class UpdateSentence extends Component {
  state = {
    sentence: "",
    translation: "",
    words: [{ english: "", japanese: "" }],
    errors: {}
  };

  componentDidMount() {
    axios
      .get(`/sentence/${this.props.sentenceId}`)
      .then(res => {
        let englishJapanesePair = [];
        for (let i = 0; i < res.data.words.length; i++) {
          englishJapanesePair.push({
            english: res.data.words[i].english,
            japanese: res.data.words[i].japanese
          });
        }

        this.setState({
          sentence: res.data.sentence,
          translation: res.data.translation,
          words: englishJapanesePair
        });
      })
      .catch(err => this.setState({ errors: err }));
  }

  handleChange = evt => {
    if (evt.target.name === "sentence" || evt.target.name === "translation") {
      this.setState({ [evt.target.name]: evt.target.value });
    } else {
      let words = [...this.state.words];
      words[evt.target.dataset.id][evt.target.dataset.language] = evt.target.value;
      this.setState({ words });
    }
  };

  addWord = () => {
    this.setState(prevState => ({
      words: [...prevState.words, { english: "", japanese: "" }]
    }));
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const word = {
      sentence: this.state.sentence,
      translation: this.state.translation,
      words: this.state.words
    };
    this.props.updateSentence(this.props.sentenceId, word);
    this.props.history.push("/sentences");
  };

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.Paper}>
        <form onSubmit={this.handleSubmit}>
          <SentenceForm
            sentenceState={this.state.sentence}
            translationState={this.state.translation}
            wordsState={this.state.words}
            handleSubmit={this.handleSubmit}
            addWord={this.addWord}
            handleChange={this.handleChange}
          />
        </form>
      </Paper>
    );
  }
}

const mapStateToProps = state => ({
  data: state.data,
  UI: state.UI
});

export default connect(
  mapStateToProps,
  { updateSentence }
)(withStyles(styles)(UpdateSentence));

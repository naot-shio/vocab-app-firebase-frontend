import React, { Component } from "react";
import SentenceForm from "./SentenceForm";
import CustomizedIconButton from "../../utils/CustomizedIconButton";

//styles
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";

// Redux
import { connect } from "react-redux";
import { postSentence } from "../../redux/actions/dataActions";

class CreateSentence extends Component {
  state = {
    open: false,
    sentence: "",
    translation: "",
    url: "",
    words: [{ english: "", japanese: "" }],
    errors: {}
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = evt => {
    if (evt.target.name === "sentence" || evt.target.name === "translation" || evt.target.name === "url") {
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
    const newWord = {
      sentence: this.state.sentence,
      translation: this.state.translation,
      url: this.state.url,
      words: this.state.words
    };
    this.props.postSentence(newWord);
    this.setState({
      sentence: "",
      translation: "",
      url: "",
      words: [{ english: "", japanese: "" }]
    });
    this.handleClose();
  };

  render() {
    const { open } = this.state;
    return (
      <>
        <CustomizedIconButton
          title="Add sentence"
          placement="bottom"
          onClick={this.handleOpen}
          icon={faPlusSquare}
          color="green"
        />

        <Dialog open={open} onClose={this.handleClose} fullWidth maxWidth="sm">
          <DialogTitle>Create a new sentence</DialogTitle>
          <DialogContent>
            <form onSubmit={this.handleSubmit}>
              <SentenceForm
                sentenceState={this.state.sentence}
                translationState={this.state.translation}
                urlState={this.state.url}
                wordsState={this.state.words}
                handleSubmit={this.handleSubmit}
                addWord={this.addWord}
                handleChange={this.handleChange}
              />
            </form>
          </DialogContent>
        </Dialog>
      </>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.UI.loading
});

export default connect(
  mapStateToProps,
  { postSentence }
)(CreateSentence);

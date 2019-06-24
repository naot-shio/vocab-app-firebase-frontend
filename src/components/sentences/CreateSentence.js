import React, { Component } from "react";
import SentenceForm from "./SentenceForm";

//styles
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";

// Redux
import { connect } from "react-redux";
import { postSentence } from "../../redux/actions/dataActions";

export class CreateSentence extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      sentence: "",
      translation: "",
      words: [{ english: "", japanese: "" }],
      errors: {}
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  handleChange = evt => {
    if (evt.target.name === "sentence" || evt.target.name === "translation") {
      this.setState({ [evt.target.name]: evt.target.value });
    } else {
      let words = [...this.state.words];
      words[evt.target.dataset.id][evt.target.className] = evt.target.value;
      this.setState({ words });
    }
  };

  addWord = () => {
    this.setState(prevState => ({
      words: [...prevState.words, { english: "", japanese: "" }]
    }));
  };

  handleSubmit(evt) {
    evt.preventDefault();
    const newWord = {
      sentence: this.state.sentence,
      translation: this.state.translation,
      words: this.state.words
    };
    this.props.postSentence(newWord);
    this.handleClose();
  }

  render() {
    const { open } = this.state;
    return (
      <>
        <IconButton onClick={this.handleOpen}>
          <FontAwesomeIcon icon={faPlusSquare} />
        </IconButton>

        <Dialog open={open} onClose={this.handleClose} fullWidth maxWidth="sm">
          <DialogTitle>Create a new sentence</DialogTitle>
          <DialogContent>
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

import React, { Component } from "react";
import Result from "./Result";

// Styles
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

// Redux
import { connect } from "react-redux";
import { getRandomSentences } from "../../redux/actions/dataActions";

export class Question extends Component {
  state = {
    answer: "",
    questionNumber: 0,
    wrongAnswers: [],
    correctAnswers: [],
    result: false,
    resultButton: true
  };

  componentDidMount() {
    let numberOfQuestions;
    if (this.props.location.state === undefined) {
      numberOfQuestions = 10;
    } else {
      numberOfQuestions = this.props.location.state.inputNumberOfQuestions;
    }
    this.props.getRandomSentences(numberOfQuestions);
  }

  handleClick = () => {
    this.setState({
      questionNumber: this.state.questionNumber + 1
    });
    this.state.wrongAnswers.push(
      this.props.data.sentences[this.state.questionNumber]
    );
  };

  handleChange = evt => {
    this.setState({
      answer: evt.target.value
    });
  };

  handleCheck = () => {
    const { questionNumber, wrongAnswers, correctAnswers } = this.state;
    const regex = /\W/gi;
    let inputAnswer = this.state.answer.replace(regex, "");
    let answer = this.props.data.sentences[questionNumber].sentence.replace(
      regex,
      ""
    );

    if (inputAnswer === answer) {
      correctAnswers.push(this.props.data.sentences[questionNumber]);
    } else {
      wrongAnswers.push(this.props.data.sentences[questionNumber]);
    }
    this.setState({
      questionNumber: questionNumber + 1
    });
  };

  handleCheckResult = () => {
    this.handleCheck();
    this.setState({ result: true, resultButton: false });
  };

  render() {
    const { sentences } = this.props.data;
    const {
      questionNumber,
      wrongAnswers,
      correctAnswers,
      result,
      resultButton
    } = this.state;

    let randomSentences = sentences.map((sentence, i) => (
      <div key={i}>
        <div style={{ display: i === questionNumber ? "block" : "none" }}>
          <h3>{sentence.translation}</h3>
          <TextField
            id="question"
            label="Question"
            onChange={this.handleChange}
            type="text"
            margin="normal"
            fullWidth
          />
          <h3>{sentence.sentence}</h3>

          <div style={{ display: "block", textAlign: "right" }}>
            <Button
              onClick={this.handleCheck}
              style={{
                display:
                  questionNumber > sentences.length - 2 ? "none" : "inline"
              }}
              disabled={questionNumber > sentences.length - 2 ? true : false}
            >
              Check
            </Button>

            <Button
              style={{
                display:
                  questionNumber > sentences.length - 2 ? "none" : "inline"
              }}
              onClick={this.handleClick}
              disabled={questionNumber > sentences.length - 2 ? true : false}
            >
              Pass
            </Button>
          </div>
        </div>
      </div>
    ));

    return (
      <div style={{ margin: "100px" }}>
        <div>{randomSentences}</div>

        {questionNumber > sentences.length - 2 && resultButton && (
          <Button onClick={this.handleCheckResult}>Result</Button>
        )}

        {result && (
          <Result
            wrongAnswers={wrongAnswers}
            correctAnswers={correctAnswers}
            sentences={sentences}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  data: state.data
});

const mapActionsToProps = {
  getRandomSentences
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Question);

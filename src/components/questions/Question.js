import React, { Component } from "react";
import Result from "./Result";

// Styles
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";

// Redux
import { connect } from "react-redux";
import { getRandomSentences } from "../../redux/actions/dataActions";

export class Question extends Component {
  state = {
    answer: "",
    questionNumber: 0,
    wrongAnswers: [],
    inputAnswers: [],
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
    this.state.inputAnswers.push('Skipped');
  };

  handleChange = evt => {
    this.setState({
      answer: evt.target.value
    });
  };

  handleCheck = () => {
    const { questionNumber, wrongAnswers, correctAnswers, inputAnswers } = this.state;
    const regex = /\W/gi;
    let inputAnswer = this.state.answer
    let trimmedInputAnswer = inputAnswer.replace(regex, "");
    let answer = this.props.data.sentences[questionNumber];
    let trimmedAnswer = answer.sentence.replace(
      regex,
      ""
    );

    if (trimmedInputAnswer === trimmedAnswer) {
      correctAnswers.push(answer);
    } else {
      wrongAnswers.push(answer);
    }
    this.setState({
      questionNumber: questionNumber + 1
    });

    if (inputAnswer) {
      inputAnswers.push(inputAnswer)
    } else {
      inputAnswers.push("Skipped")
    }
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
      resultButton,
      inputAnswers
    } = this.state;

    let randomSentences = sentences.map((sentence, i) => (
        <Card style={{ display: i === questionNumber ? "block" : "none", padding: 40 }} key={sentence.sentenceId}>
          <h2>Question: {questionNumber + 1}</h2>
          <h3>{sentence.translation}</h3>
          <TextField
            id="question"
            label="Question"
            onChange={this.handleChange}
            type="text"
            margin="normal"
            fullWidth
          />

          <div style={{ display: "block", textAlign: "right" , marginTop: 20}}>
            <Button
              variant="contained" color="primary" 
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
              variant="contained" color="secondary" 
              style={{
                display:
                  questionNumber > sentences.length - 2 ? "none" : "inline",
                  marginLeft: 10
              }}
              onClick={this.handleClick}
              disabled={questionNumber > sentences.length - 2 ? true : false}
            >
              Pass
            </Button>

            {questionNumber > sentences.length - 2 && resultButton && (
              <Button onClick={this.handleCheckResult} variant="contained" color="primary">Result</Button>
            )}
          </div>
        </Card>
    ));

    return (
      <div style={{ margin: "100px" }}>
        {randomSentences}

        {result && (
          <Result
            wrongAnswers={wrongAnswers}
            correctAnswers={correctAnswers}
            sentences={sentences}
            inputAnswers={inputAnswers}
          />
        )}
      </div> 
    );
  }
}

const mapStateToProps = state => ({
  data: state.data
});

const mapActionsToProps = {
  getRandomSentences
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Question);

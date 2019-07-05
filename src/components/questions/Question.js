import React, { Component } from "react";
import Result from "./Result";

// Styles
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "../../styles/questions/QuestionStyles";

// Redux
import { connect } from "react-redux";
import { getRandomSentences } from "../../redux/actions/dataActions";

class Question extends Component {
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
    this.state.inputAnswers.push("Skipped");
  };

  handleChange = evt => {
    this.setState({
      answer: evt.target.value
    });
  };

  handleCheck = () => {
    const {
      questionNumber,
      wrongAnswers,
      correctAnswers,
      inputAnswers
    } = this.state;
    const regex = /\W/gi;
    let inputAnswer = this.state.answer;
    let trimmedInputAnswer = inputAnswer.replace(regex, "");
    let answer = this.props.data.sentences[questionNumber];
    let trimmedAnswer = answer.sentence.replace(regex, "");

    if (trimmedInputAnswer === trimmedAnswer) {
      correctAnswers.push(answer);
    } else {
      wrongAnswers.push(answer);
    }
    this.setState({
      questionNumber: questionNumber + 1
    });

    if (inputAnswer) {
      inputAnswers.push(inputAnswer);
    } else {
      inputAnswers.push("Skipped");
    }
  };

  handleCheckResult = () => {
    this.handleCheck();
    this.setState({ result: true, resultButton: false });
  };

  render() {
    const { classes } = this.props;
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
      <Card
        className={
          i === questionNumber ? classes.displayQuestion : classes.hideContent
        }
        key={sentence.sentenceId}
      >
        <CardContent className={classes.cardContent}>
          <h2>
            Question {questionNumber + 1}: Paraphrase the sentence with the
            word(s) below.
          </h2>
          <p>
            {sentence.words.map(word => (
              <span className={classes.words}>{word.english}</span>
            ))}
          </p>
          <h3 className={classes.translation}>{sentence.translation}</h3>
          <TextField
            id="answer"
            label="Answer"
            onChange={this.handleChange}
            type="text"
            margin="normal"
            fullWidth
            multiline
            rowsMax="3"
          />

          <div className={classes.buttons}>
            {/* These two buttons should be hidden when a user reaches the last question, which is the sentences.length - 1 */}
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleCheck}
              className={
                questionNumber > sentences.length - 2
                  ? classes.hideContent
                  : classes.displayButton
              }
              disabled={questionNumber > sentences.length - 2 ? true : false}
            >
              Check
            </Button>

            <Button
              variant="contained"
              color="secondary"
              className={
                questionNumber > sentences.length - 2
                  ? classes.hideContent
                  : classes.displayButton
              }
              onClick={this.handleClick}
              disabled={questionNumber > sentences.length - 2 ? true : false}
            >
              Pass
            </Button>

            {questionNumber > sentences.length - 2 && resultButton && (
              <Button
                onClick={this.handleCheckResult}
                variant="contained"
                color="primary"
              >
                Result
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    ));

    return (
      <div className={classes.questions}>
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
)(withStyles(styles)(Question));

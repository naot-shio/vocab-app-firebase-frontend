import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
// Redux
import { connect } from "react-redux";
import { getRandomSentences } from "../../redux/actions/dataActions";

export class Question extends Component {
  state = {
    questionNumber: 0
  };
  componentDidMount() {
    let numberOfQuestions;
    if (this.props.location.state === undefined) {
      numberOfQuestions = 10;
    } else {
      numberOfQuestions = this.props.location.state.inputNumberOfQuestions;
    }
    console.log(numberOfQuestions);
    this.props.getRandomSentences(numberOfQuestions);
  }

  handleClick = () => {
    this.setState({
      questionNumber: this.state.questionNumber + 1
    });
  };

  render() {
    const { sentences } = this.props.data;
    const { questionNumber } = this.state;

    let randomSentences = sentences.map((sentence, i) => (
      <div key={i}>
        <h3 style={{ display: i === questionNumber ? "block" : "none" }}>
          {sentence.sentence}
        </h3>
        <h3 style={{ display: i === questionNumber ? "block" : "none" }}>
          {sentence.translation}
        </h3>
      </div>
    ));

    return (
      <div style={{ margin: "100px" }}>
        <Button
          style={{
            display: questionNumber > sentences.length - 2 ? "none" : "block"
          }}
          onClick={this.handleClick}
          disabled={questionNumber > sentences.length - 2 ? true : false}
        >
          Click me
        </Button>
        <div>{randomSentences}</div>
        {questionNumber > sentences.length - 2 && (
          <Button>
            <Link to="/sentences">Go back home</Link>
          </Button>
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

import React, { Component } from "react";
import Button from "@material-ui/core/Button";
// Redux
import { connect } from "react-redux";
import { getRandomSentences } from "../../redux/actions/dataActions";

export class Quiz extends Component {
  state = {
    quizNum: 0
  };
  componentDidMount() {
    this.props.getRandomSentences();
  }

  handleClick = () => {
    this.setState({
      quizNum: this.state.quizNum + 1
    });
  };

  render() {
    const { sentences } = this.props.data;
    const { quizNum } = this.state;

    let randomSentences = sentences.map((sentence, i) => (
      <div key={i}>
        <h3 style={{ display: i === quizNum ? "block" : "none" }}>
          {sentence.sentence}
        </h3>
        <h3 style={{ display: i === quizNum ? "block" : "none" }}>
          {sentence.translation}
        </h3>
      </div>
    ));

    return (
      <div style={{ margin: "100px" }}>
        <Button
          style={{ display: quizNum > sentences.length - 2 ? "none" : "block" }}
          onClick={this.handleClick}
          disabled={quizNum > sentences.length - 2 ? true : false}
        >
          Click me
        </Button>
        <div>{randomSentences}</div>
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
)(Quiz);

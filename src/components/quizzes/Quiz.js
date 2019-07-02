import React, { Component } from "react";
// Redux
import { connect } from "react-redux";
import { getRandomSentences } from "../../redux/actions/dataActions";

export class Quiz extends Component {
  componentDidMount() {
    this.props.getRandomSentences();
  }
  render() {
    const { sentences } = this.props.data;

    let randomSentences = sentences.map((sentence, i) => (
      <div key={i}>
        <h3>{sentence.sentence}</h3>
        <h3>{sentence.translation}</h3>
      </div>
    ));
    return <div>{randomSentences}</div>;
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

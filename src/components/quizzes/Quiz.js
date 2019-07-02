import React, { Component } from "react";
import Button from '@material-ui/core/Button'
// Redux
import { connect } from "react-redux";
import { getRandomSentences } from "../../redux/actions/dataActions";

export class Quiz extends Component {
  state = {
    next: false,
    quizNum: 0
  }
  componentDidMount() {
    this.props.getRandomSentences();
  }

  componentDidUpdate() {
    if (this.state.next) {
       this.setState({ next: false })
       console.log(this.state.quizNum)
    }
    console.log(this.state.next)
  }

  handleClick = () => {
    this.setState({ 
      next: true,
      quizNum: this.state.quizNum + 1
   }) 
  }
  
  render() {
    const { sentences } = this.props.data;

    let randomSentences = sentences.map((sentence, i) => (
      <div key={i}>
        <h3 style={{ display: i === this.state.quizNum ? "block" : "none" }}>{sentence.sentence}</h3>
        <h3 style={{ display: i === this.state.quizNum ? "block" : "none" }}>{sentence.translation}</h3>
      </div>
    ));

    return (
      <div style={{margin: "100px"}}>
        <Button onClick={this.handleClick}>Click me</Button>
        <div>{randomSentences}</div>
      </div>
    )
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

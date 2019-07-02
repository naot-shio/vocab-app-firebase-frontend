import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import SentenceDetails from "../sentences/SentenceDetails";

function Result({ wrongAnswers, correctAnswers, sentences }) {
  let displayCorrectAnswers =
    correctAnswers.length > 0 ? (
      correctAnswers.map((sentence, i) => (
        <SentenceDetails sentence={sentence} i={i} key={sentence.sentenceId} />
      ))
    ) : (
      <p>Oh no... You got it all wrong :(</p>
    );

  let displayWrongAnswers =
    wrongAnswers.length > 0 ? (
      wrongAnswers.map((sentence, i) => (
        <SentenceDetails sentence={sentence} i={i} key={sentence.sentenceId} />
      ))
    ) : (
      <p>Perfect!</p>
    );

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h3>Well done</h3>
        <p>
          You got {correctAnswers.length} out of {sentences.length}
        </p>
      </div>

      <div>
        <h5>Correct Answers</h5>
        {displayCorrectAnswers}
      </div>

      <div>
        <h5>Wrong Answers</h5>
        {displayWrongAnswers}
      </div>

      <Button>
        <Link to="/sentences">Go back home</Link>
      </Button>
    </>
  );
}

export default Result;

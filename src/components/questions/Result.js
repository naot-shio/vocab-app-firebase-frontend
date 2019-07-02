import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import SentenceDetails from "../sentences/SentenceDetails";

function Result({ wrongAnswers, correctAnswers, sentences, inputAnswers }) {
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

  let answers = inputAnswers.map((answer, i) => (
    <div key={i} style={{ style: "inline-block", marginBottom: 10 }}>
      <h5 style={{ display: "inline" }}>Question {i + 1}: </h5>
      <p style={{ color: "red", display: "inline" }}>{answer}</p>
    </div>
  ));

  let message;
  if (correctAnswers.length === sentences.length) {
    message = <p>Bravo</p>;
  } else if (correctAnswers.length / sentences.length >= 0.8) {
    message = <p>Fantastic Job</p>;
  } else if (correctAnswers.length / sentences.length >= 0.5) {
    message = <p>Keep it up</p>;
  } else {
    message = <p>Nice try</p>;
  }
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h3>{message}</h3>
        <p>
          You got {correctAnswers.length} out of {sentences.length}
        </p>
      </div>

      <div>
        <h3>Your answers</h3>
        {answers}
      </div>

      <div>
        <h5>Correct Answers</h5>
        {displayCorrectAnswers}
      </div>

      <div>
        <h5>Wrong Answers</h5>
        {displayWrongAnswers}
      </div>

      <div style={{ textAlign: "right" }}>
        <Link to="/sentences" style={{ textDecoration: "none" }}>
          <Button color="primary">Go back home</Button>
        </Link>
      </div>
    </>
  );
}

export default Result;

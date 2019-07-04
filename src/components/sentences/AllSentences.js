import React from 'react'
import SentenceDetails from "./SentenceDetails";
import CircularProgress from "@material-ui/core/CircularProgress";
import useStyles from '../../styles/sentences/AllSentencesStyles'

function AllSentences({ sentences, loading, baseIndex }) {
  const classes = useStyles();
  const getAllSentences = !loading ? (
      <div className={classes.sentences}>
        {sentences.map((sentence, i) => (
          <SentenceDetails
            key={sentence.sentenceId}
            sentence={sentence}
            i={i + baseIndex}
          />
        ))}
      </div>
    ) : (
      <div className={classes.loading}>
        <CircularProgress size={250} />
      </div>
    );
  return <>{getAllSentences}</>
}

export default AllSentences

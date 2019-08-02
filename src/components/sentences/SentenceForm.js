import React from "react";

// styles
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import useStyles from "../../styles/sentences/SentenceFormStyles";

function SentenceForm(props) {
  const classes = useStyles();
  const {
    sentenceState,
    translationState,
    wordsState,
    addWord,
    handleChange
  } = props;
  return (
    <>
      <TextField
        name="sentence"
        type="text"
        value={sentenceState}
        label="sentence"
        className={classes.textField}
        onChange={handleChange}
        fullWidth
        multiline
        rowsMax="3"
      />

      <TextField
        name="translation"
        type="text"
        value={translationState}
        label="translation"
        className={classes.textField}
        onChange={handleChange}
        fullWidth
        multiline
        rowsMax="3"
      />
      <Grid container>
        <Grid item xs={9}>
          {wordsState.map((val, idx) => {
            let englishId = `english-${idx}`,
              japaneseId = `english-${idx}`;
            return (
              <div key={idx} className={classes.englishJapaneseInputForm}>
                <input
                  type="text"
                  name={englishId}
                  id={englishId}
                  value={wordsState[idx].english}
                  className={classes.inputWords}
                  data-id={idx}
                  data-language="english"
                  placeholder={`English: ${idx + 1}`}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  name={japaneseId}
                  id={japaneseId}
                  value={wordsState[idx].japanese}
                  className={classes.inputWords}
                  data-id={idx}
                  data-language="japanese"
                  placeholder={`Japanese: ${idx + 1}`}
                  onChange={handleChange}
                />
              </div>
            );
          })}
        </Grid>

        <Grid item xs={3}>
          <div className={classes.addWord}>
            <Fab color="secondary" aria-label="Add" onClick={addWord}>
              <FontAwesomeIcon icon={faPlus} />
            </Fab>
          </div>
        </Grid>
      </Grid>

      <div className={classes.submitButton}>
        <Button type="submit" variant="contained" color="primary">
          Submit!
        </Button>
      </div>
    </>
  );
}

export default SentenceForm;

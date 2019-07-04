import React, { useState } from "react";
import Dictionary from "./Dictionary";
import CustomizedIconButton from "../../utils/CustomizedIconButton";

// styles
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import useStyles from "../../styles/sentences/WordMeaningListStyles";

function WordMeaningList(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const { index, i, word } = props;
  return (
    <div className={classes.word}>
      <Typography className={classes.indices}>
        {i + 1}-{index + 1}
      </Typography>
      <Typography className={classes.english}>
        <CustomizedIconButton
          title="Google Dictionary"
          placement="top"
          onClick={() => setOpen(true)}
          icon={faInfoCircle}
          color="black"
        />
        {word.english}:
      </Typography>
      <Typography className={classes.japanese}>{word.japanese}</Typography>
      <Dialog
        open={open}
        aria-labelledby="dictionary"
        onClose={() => setOpen(false)}
      >
        <Dictionary word={word.english} />
      </Dialog>
    </div>
  );
}

export default WordMeaningList;

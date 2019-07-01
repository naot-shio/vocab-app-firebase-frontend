import React, { Component } from "react";
import Dictionary from "./Dictionary";
import CustomizedIconButton from "../../utils/CustomizedIconButton";

// styles
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "../../styles/sentences/WordMeaningListStyles";

export class WordMeaningList extends Component {
  state = {
    open: false
  };

  handleToggleDictionary = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { index, i, word, classes } = this.props;
    return (
      <div className={classes.word}>
        <Typography className={classes.indices}>
          {i + 1}-{index + 1}
        </Typography>
        <Typography className={classes.english}>
          <CustomizedIconButton
            title="Google Dictionary"
            placement="top"
            onClick={this.handleToggleDictionary}
            icon={faInfoCircle}
            color="black"
          />
          {word.english}:
        </Typography>
        <Typography className={classes.japanese}>{word.japanese}</Typography>
        <Dialog
          open={this.state.open}
          aria-labelledby="dictionary"
          onClose={this.handleToggleDictionary}
        >
          <Dictionary word={word.english} />
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(WordMeaningList);

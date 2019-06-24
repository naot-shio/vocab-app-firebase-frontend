import React, { Component } from "react";
import Dictionary from "./Dictionary";

// styles
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import Tooltip from "@material-ui/core/Tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "../../styles/sentences/WordMeaningListStyles";

export class WordMeaningList extends Component {
  state = {
    openDictionary: false
  };
  handleSearch = () => {
    this.setState({ openDictionary: true });
  };

  handleDictionary = () => {
    this.setState({ openDictionary: false });
  };
  render() {
    const { index, i, word, classes } = this.props;
    return (
      <div key={index} className={classes.word}>
        <Typography className={classes.indices}>
          {i + 1}-{index + 1}
        </Typography>
        <Typography className={classes.english}>
          <Tooltip title="Google Dictionary" placement="top">
            <IconButton onClick={this.handleSearch}>
              <FontAwesomeIcon icon={faInfoCircle} color="black" />
            </IconButton>
          </Tooltip>
          {word.english}:
        </Typography>
        <Typography className={classes.japanese}>{word.japanese}</Typography>
        <Dialog
          open={this.state.openDictionary}
          aria-labelledby="dictionary"
          onClose={this.handleDictionary}
        >
          <Dictionary word={word.english} />
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(WordMeaningList);

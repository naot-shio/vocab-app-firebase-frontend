import React, { Component } from "react";
import { Link } from "react-router-dom";
import SentenceDetails from "./SentenceDetails";
import CustomizedIconButton from "../../utils/CustomizedIconButton";

// styles
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/sentences/SentenceListStyles";

// Redux
import { connect } from "react-redux";
import {
  getLikedSentences,
  updateSentence
} from "../../redux/actions/dataActions";

class SentenceList extends Component {
  state = {
    currentSentence: 1
  };

  componentDidMount() {
    this.props.getLikedSentences(this.state.keyword);
  }

  render() {
    const { classes } = this.props;
    const { loading, sentences } = this.props.data;

    const displayLikeButton = (
      <Link to="/sentences">
        <CustomizedIconButton
          title="Display All of The Sentences"
          placement="bottom-end"
          icon={faHeart}
          color="red"
        />
      </Link>
    );

    const sentencesPerPage = 3;
    const indexOfLastSentence = this.state.currentSentence * sentencesPerPage;
    const indexOfFirstSentence = indexOfLastSentence - sentencesPerPage;
    const currentSentences = sentences.slice(
      indexOfFirstSentence,
      indexOfLastSentence
    );

    let getAllSentences = !loading ? (
      currentSentences.map((sentence, i) => (
        <SentenceDetails key={sentence.sentenceId} sentence={sentence} i={i} />
      ))
    ) : (
      <div className={classes.loading}>
        <CircularProgress size={250} />
      </div>
    );

    return (
      <Grid container>
        <Grid item sm={2} xs={1}>
          {displayLikeButton}
        </Grid>

        <Grid item sm={8} xs={10}>
          {getAllSentences}

          <Button
            onClick={() =>
              this.setState({ currentSentence: this.state.currentSentence - 1 })
            }
          >
            Prev
          </Button>
          <Button
            onClick={() =>
              this.setState({ currentSentence: this.state.currentSentence + 1 })
            }
          >
            Next
          </Button>
        </Grid>

        <Grid item sm={2} xs={1} />
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  data: state.data
});

const mapActionsToProps = {
  getLikedSentences,
  updateSentence
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(SentenceList));

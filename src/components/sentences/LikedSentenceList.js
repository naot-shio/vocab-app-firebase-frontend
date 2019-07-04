import React, { Component } from "react";
import { Link } from "react-router-dom";
import SentenceDetails from "./SentenceDetails";
import CustomizedIconButton from "../../utils/CustomizedIconButton";

// styles
import withStyles from "@material-ui/core/styles/withStyles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/sentences/LikedSentenceListStyles";

// Redux
import { connect } from "react-redux";
import {
  getLikedSentences,
  updateSentence
} from "../../redux/actions/dataActions";

class LikedSentenceList extends Component {
  componentDidMount() {
    this.props.getLikedSentences();
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

    let getAllSentences = !loading ? (
      sentences.map((sentence, i) => (
        <SentenceDetails key={sentence.sentenceId} sentence={sentence} i={i} />
      ))
    ) : (
      <div className={classes.loading}>
        <CircularProgress size={250} />
      </div>
    );

    return (
      <div className={classes.container}>
        <div className={classes.likeButton}> 
          {displayLikeButton}
        </div>

        <div className={classes.sentences}>
          {getAllSentences}
        </div>

        <div />
      </div>
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
)(withStyles(styles)(LikedSentenceList));

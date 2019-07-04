import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SentenceDetails from "./SentenceDetails";
import CustomizedIconButton from "../../utils/CustomizedIconButton";

// styles
import CircularProgress from "@material-ui/core/CircularProgress";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import useStyles from "../../styles/sentences/LikedSentenceListStyles";

// Redux
import { connect } from "react-redux";
import {
  getLikedSentences,
  updateSentence
} from "../../redux/actions/dataActions";

function LikedSentenceList(props) {
  const classes = useStyles();
  const { getLikedSentences } = props;
  const { loading, sentences } = props.data;

  useEffect(() => {
    getLikedSentences();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      <div className={classes.likeButton}>{displayLikeButton}</div>
      <div className={classes.sentences}>{getAllSentences}</div>
      <div />
    </div>
  );
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
)(LikedSentenceList);

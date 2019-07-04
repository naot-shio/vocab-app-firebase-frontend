import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AllSentences from "./AllSentences";
import CustomizedIconButton from "../../utils/CustomizedIconButton";

// styles
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

  return (
    <div className={classes.container}>
      <div />
      <div>
        <div className={classes.likeButton}>
          {displayLikeButton}
          <h3 className={classes.subtitle}>Sentences you have liked!</h3>
        </div>
        <AllSentences
          sentences={sentences}
          loading={loading}
          baseIndex={null}
        />
      </div>
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

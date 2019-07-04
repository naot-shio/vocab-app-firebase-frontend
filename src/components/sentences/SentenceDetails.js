import React from "react";
import { Link } from "react-router-dom";
import DeleteSentence from "./DeleteSentence";
import WordMeaningList from "./WordMeaningList";

// styles
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Fab from "@material-ui/core/Fab";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import {
  faEdit,
  faHeart as faHeartRegular
} from "@fortawesome/free-regular-svg-icons";
import useStyles from "../../styles/sentences/SentenceDetailsStyles";

// Redux
import { connect } from "react-redux";
import { likeSentence, unlikeSentence } from "../../redux/actions/dataActions";

function SentenceDetails(props) {
  const classes = useStyles();
  const sentenceLiked = () => {
    if (
      props.user.likes &&
      props.user.likes.find(
        like => like.sentenceId === props.sentence.sentenceId
      )
    )
      return true;
    return false;
  };

  const likeSentence = () => {
    props.likeSentence(props.sentence.sentenceId);
  };

  const unlikeSentence = () => {
    props.unlikeSentence(props.sentence.sentenceId);
  };

  const { sentence, i } = props;
  const {
    authenticated,
    credentials: { name }
  } = props.user;

  const editDeleteButton = sentence =>
    authenticated &&
    sentence.userName === name && (
      <div className={classes.icons}>
        <Fab color="primary" aria-label="Edit" size="small">
          <Link
            to={`/sentence/${sentence.sentenceId}`}
            onClick={e => e.stopPropagation()}
          >
            <FontAwesomeIcon icon={faEdit} color="white" />
          </Link>
        </Fab>
        <DeleteSentence sentenceId={sentence.sentenceId} />
      </div>
    );

  const likeButton = sentenceLiked() ? (
    <IconButton onClick={unlikeSentence}>
      <FontAwesomeIcon icon={faHeartSolid} color="red" />
    </IconButton>
  ) : (
    <IconButton onClick={likeSentence}>
      <FontAwesomeIcon icon={faHeartRegular} color="red" />
    </IconButton>
  );

  return (
    <Card className={classes.Card} key={sentence.sentenceId}>
      <CardContent>
        <Typography variant="h5">
          {i + 1}. <span className={classes.sentence}>{sentence.sentence}</span>
        </Typography>

        {authenticated && likeButton}

        {sentence.words.map((word, index) => (
          <WordMeaningList index={index} i={i} word={word} key={index} />
        ))}

        <Typography variant="body1" className={classes.translation}>
          訳: {sentence.translation}
        </Typography>

        {editDeleteButton(sentence)}
      </CardContent>
    </Card>
  );
}

const mapStateToProps = state => ({
  user: state.user
});

const mapActionsToProps = {
  likeSentence,
  unlikeSentence
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(SentenceDetails);

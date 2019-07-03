import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthenticationIcon from "../auth/AuthenticationIcon";
import SentenceDetails from "./SentenceDetails";
import CustomizedIconButton from "../../utils/CustomizedIconButton";

// styles
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import styles from "../../styles/sentences/SentenceListStyles";

// Redux
import { connect } from "react-redux";
import { getSentences, updateSentence } from "../../redux/actions/dataActions";

class SentenceList extends Component {
  state = {
    keyword: "",
    currentSentence: 1,
    baseIndex: 0
  };

  componentDidMount() {
    this.props.getSentences(this.state.keyword);
  }

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.getSentences(this.state.keyword);
    this.setState({ keyword: "" });
  };

  // Adding and subtracting 10 on baseIndex is to set the proper index on each word.
  // As this is not a typical pagination but just that an array of sentences is sliced up into a set of vocabulary
  // that contains 10 words. (I should name a 'baseIndex' state something better, but no good names come to my mind)

  handleClickNext = () => {
    this.setState({
      currentSentence: this.state.currentSentence + 1,
      baseIndex: this.state.baseIndex + 10
    });
  };

  handleClickPrevious = () => {
    this.setState({
      currentSentence: this.state.currentSentence - 1,
      baseIndex: this.state.baseIndex - 10
    });
  };

  render() {
    const { classes } = this.props;
    const { authenticated } = this.props.user;
    const { sentences, loading } = this.props.data;

    const displayLikeButton = (
      <Link to="/sentences/likes">
        <CustomizedIconButton
          title="Display All of The Sentences"
          placement="bottom-end"
          icon={faHeart}
          color="red"
        />
      </Link>
    );

    const isAuthenticated = !authenticated && <AuthenticationIcon />;

    const buttonSearchBar = authenticated && (
      <div className={classes.topField}>
        <Grid container>
          <Grid item xs={2}>
            <div className={classes.button}>{displayLikeButton}</div>
          </Grid>

          <Grid item xs={10}>
            <div className={classes.textField}>
              <form onSubmit={this.handleSubmit}>
                <TextField
                  name="keyword"
                  type="text"
                  value={this.state.keyword}
                  label="search"
                  onChange={this.handleChange}
                  fullWidth
                />
              </form>
            </div>
          </Grid>
        </Grid>
      </div>
    );

    const sentencesPerPage = 10;
    const indexOfLastSentence = this.state.currentSentence * sentencesPerPage;
    const indexOfFirstSentence = indexOfLastSentence - sentencesPerPage;
    const currentSentences = sentences.slice(
      indexOfFirstSentence,
      indexOfLastSentence
    );

    let getAllSentences = !loading ? (
      <>
        {currentSentences.map((sentence, i) => (
          <SentenceDetails
            key={sentence.sentenceId}
            sentence={sentence}
            i={i + this.state.baseIndex}
          />
        ))}
        <div className={classes.buttonToPaginate}>
          <Button
            color="secondary"
            onClick={this.handleClickPrevious}
            disabled={this.state.currentSentence - 2 < 0 ? true : false}
            style={{
              display: this.state.currentSentence - 2 < 0 ? "none" : "inline"
            }}
          >
            Prev
          </Button>
          <Button
            color="primary"
            onClick={this.handleClickNext}
            disabled={sentences.length < indexOfLastSentence ? true : false}
            style={{
              display:
                sentences.length < indexOfLastSentence ? "none" : "inline"
            }}
          >
            Next
          </Button>
        </div>
      </>
    ) : (
      <div className={classes.loading}>
        <CircularProgress size={250} />
      </div>
    );

    return (
      <Grid container>
        <Grid item sm={2} xs={1} />

        <Grid item sm={8} xs={10}>
          {buttonSearchBar}

          {getAllSentences}
        </Grid>

        <Grid item sm={2} xs={1}>
          <div className={classes.isAuthenticated}>{isAuthenticated}</div>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  data: state.data
});

const mapActionsToProps = {
  getSentences,
  updateSentence
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(SentenceList));

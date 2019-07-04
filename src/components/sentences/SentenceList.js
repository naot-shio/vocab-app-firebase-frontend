import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthenticationIcon from "../auth/AuthenticationIcon";
import SentenceDetails from "./SentenceDetails";
import Pagination from "../pages/Pagination";
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
    baseIndex: 0,
    open: false
  };

  componentDidMount() {
    this.props.getSentences(this.state.keyword);
  }

  handleTogglePagination = () => {
    this.setState({ open: !this.state.open });
  };

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

  // paginate function is passed down to the Pagination component and when elements of pageNumbers are pushed,
  // elements are multiplied by 10, as this way is easier to adjust indices on words in the pagination.
  // Ergo, page argument needs to be divided by 10 to set the currentSentence, and subtracts 10 to set a correct baseIndex
  paginate = page => {
    this.setState({
      currentSentence: page / 10,
      baseIndex: page - 10
    });
  };

  render() {
    const { classes } = this.props;
    const { authenticated } = this.props.user;
    const { sentences, loading } = this.props.data;

    const isAuthenticated = !authenticated && <AuthenticationIcon />;

    const likeButtonAndSearch = authenticated && (
      <Grid container className={classes.topField}>
        <Grid item xs={2} className={classes.button}>
          <Link to="/sentences/likes">
            <CustomizedIconButton
              title="Display All of The Sentences"
              placement="bottom-end"
              icon={faHeart}
              color="red"
            />
          </Link>
        </Grid>

        <Grid item xs={10} className={classes.textField}>
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
        </Grid>
      </Grid>
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
            className={
              this.state.currentSentence - 2 < 0
                ? classes.hideButton
                : classes.displayButton
            }
            disabled={this.state.currentSentence - 2 < 0 ? true : false}
          >
            Prev
          </Button>
          <Button
            color="primary"
            onClick={this.handleClickNext}
            className={
              sentences.length < indexOfLastSentence
                ? classes.hideButton
                : classes.displayButton
            }
            disabled={sentences.length < indexOfLastSentence ? true : false}
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
        <Grid
          item
          sm={2}
          xs={1}
          className={
            this.state.open ? classes.showPagination : classes.hidePagination
          }
        >
          <Pagination
            sentencesPerPage={sentencesPerPage}
            totalSentences={sentences.length}
            paginate={this.paginate}
            handleToggle={this.handleTogglePagination}
            open={this.state.open}
          />
        </Grid>

        <Grid item sm={8} xs={10} className={classes.content}>
          {likeButtonAndSearch}

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

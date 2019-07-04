import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthenticationIcon from "../auth/AuthenticationIcon";
import SentenceDetails from "./SentenceDetails";
import Pagination from "../pages/Pagination";
import CustomizedIconButton from "../../utils/CustomizedIconButton";

// styles
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
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
    open: false,
    sentencesPerPage: 10
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
      baseIndex: this.state.baseIndex + this.state.sentencesPerPage
    });
  };

  handleClickPrevious = () => {
    this.setState({
      currentSentence: this.state.currentSentence - 1,
      baseIndex: this.state.baseIndex - this.state.sentencesPerPage
    });
  };

  // paginate function is passed down to the Pagination component and when elements of pageNumbers are pushed,
  // elements are multiplied by 10, as this way is easier to adjust indices on words in the pagination.
  // Ergo, page argument needs to be divided by 10 to set the currentSentence, and subtracts 10 to set a correct baseIndex
  paginate = page => {
    this.setState({
      currentSentence: page / this.state.sentencesPerPage,
      baseIndex: page - this.state.sentencesPerPage
    });
  };

  render() {
    const { classes } = this.props;
    const { authenticated } = this.props.user;
    const { sentences, loading } = this.props.data;

    const isAuthenticated = !authenticated && <AuthenticationIcon />;

    const likeButtonAndSearch = authenticated && (
      <div className={classes.likeSearchContainer}>
        <div className={classes.button}>
          <Link to="/sentences/likes">
            <CustomizedIconButton
              title="Display All of The Sentences"
              placement="bottom-end"
              icon={faHeart}
              color="red"
            />
          </Link>
        </div>

        <div className={classes.textField}>
          <form onSubmit={this.handleSubmit}>
            <TextField
              name="keyword"
              type="text"
              value={this.state.keyword}
              label="search"
              onChange={this.handleChange}
              fullWidth
              placeholder="Click Enter to Search"
            />
          </form>
        </div>
      </div>
    );

    const indexOfLastSentence =
      this.state.currentSentence * this.state.sentencesPerPage;
    const indexOfFirstSentence =
      indexOfLastSentence - this.state.sentencesPerPage;
    const currentSentences = sentences.slice(
      indexOfFirstSentence,
      indexOfLastSentence
    );

    let getAllSentences = !loading ? (
      <div className={classes.sentences}>
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
      </div>
    ) : (
      <div className={classes.loading}>
        <CircularProgress size={250} />
      </div>
    );

    return (
      <div className={classes.container}>
        <div
          className={
            this.state.open ? classes.showPagination : classes.hidePagination
          }
        >
          <Pagination
            sentencesPerPage={this.state.sentencesPerPage}
            totalSentences={sentences.length}
            paginate={this.paginate}
            handleToggle={this.handleTogglePagination}
            open={this.state.open}
          />
        </div>

        <div>
          {likeButtonAndSearch}

          {getAllSentences}
        </div>

        <div>
          <div className={classes.isAuthenticated}>{isAuthenticated}</div>
        </div>
      </div>
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

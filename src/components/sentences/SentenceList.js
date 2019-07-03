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
    currentSentence: 1
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
        <Grid item sm={2} xs={1} />

        <Grid item sm={8} xs={10}>
          {buttonSearchBar}

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

import React, { Component } from "react";
import { withRouter } from "react-router";
import CustomizedIconButton from "../../utils/CustomizedIconButton";

// styles
import withStyles from "@material-ui/core/styles/withStyles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/pages/ProfileStyles";

// Redux
import { connect } from "react-redux";
import { getRandomSentences } from "../../redux/actions/dataActions";

class Profile extends Component {
  state = {
    open: false,
    inputNumberOfQuestions: 5,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleClick = () => {
    this.props.history.push("/question", { inputNumberOfQuestions: this.state.inputNumberOfQuestions  });
    this.handleClose();
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.profileIcon}>
          <CustomizedIconButton
            title="Profile"
            placement="bottom"
            onClick={this.handleOpen}
            icon={faQuestion}
            color="royalblue"
          />
        </div>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <Paper className={classes.paper}>
            <h1>How many questions would you like to solve</h1>
          </Paper>

          <DialogActions>
            <Button onClick={this.handleClick}>Start</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { getRandomSentences }
)(withStyles(styles)(withRouter(Profile)));

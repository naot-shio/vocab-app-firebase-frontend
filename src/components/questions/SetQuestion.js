import React, { Component } from "react";
import { withRouter } from "react-router";
import CustomizedIconButton from "../../utils/CustomizedIconButton";

// styles
import withStyles from "@material-ui/core/styles/withStyles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/pages/ProfileStyles";

class SetQuestion extends Component {
  state = {
    open: false,
    inputNumberOfQuestions: 10
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = evt => {
    this.setState({
      inputNumberOfQuestions: evt.target.value
    });
  };

  handleClick = () => {
    this.props.history.push("/question", {
      inputNumberOfQuestions: this.state.inputNumberOfQuestions
    });
    this.handleClose();
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.profileIcon}>
          <CustomizedIconButton
            title="Question"
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
            <Typography variant="h5">
              How many questions would you like to solve?
            </Typography>
            <TextField
              id="standard-number"
              label="Number"
              onChange={this.handleChange}
              type="number"
              margin="normal"
            />
          </Paper>

          <DialogActions>
            <Button onClick={this.handleClick}>Start</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(SetQuestion));

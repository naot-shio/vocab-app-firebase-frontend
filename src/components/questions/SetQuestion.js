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
import styles from "../../styles/questions/SetQuestionStyles";

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
        <CustomizedIconButton
          title="Question"
          placement="bottom"
          onClick={this.handleOpen}
          icon={faQuestion}
          color="royalblue"
        />

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <Paper className={classes.paper}>
            <Typography variant="h6">
              How many questions would you like to attempt?
            </Typography>
            <Typography variant="body2"> 
              If you don't input any number, 10 questions will be given.
            </Typography>
            
            <TextField
              id="standard-number"
              label="Number of Questions"
              onChange={this.handleChange}
              type="number"
              margin="normal"
              className={classes.input}
              inputProps={{ min: "1" }}
            />
          </Paper>

          <DialogActions>
            <Button
              onClick={this.handleClick}
              variant="contained"
              color="primary"
            >
              Start
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(SetQuestion));

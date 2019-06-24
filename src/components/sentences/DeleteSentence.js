import React, { Component } from "react";

// styles
import Fab from "@material-ui/core/Fab";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
// Redux
import { connect } from "react-redux";
import { deleteSentence } from "../../redux/actions/dataActions";

class DeleteSentence extends Component {
  state = {
    open: false
  };
  handleOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  deleteSentence = () => {
    this.props.deleteSentence(this.props.sentenceId);
    this.setState({ open: false });
  };
  render() {
    return (
      <>
        <Fab
          color="secondary"
          aria-label="Delete"
          size="small"
          onClick={this.handleOpen}
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </Fab>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          fullWidth
          maxWidth="sm"
        >
          <DialogTitle>
            Are you sure you want to delete this sentence ?
          </DialogTitle>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.deleteSentence} color="secondary">
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
}

export default connect(
  null,
  { deleteSentence }
)(DeleteSentence);

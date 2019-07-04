import React, { useState } from "react";

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

function DeleteSentence(props) {
  const [open, setOpen] = useState(false);

  const handleDelete = () => {
    props.deleteSentence(props.sentenceId);
    setOpen(false);
  };

  return (
    <>
      <Fab
        color="secondary"
        aria-label="Delete"
        size="small"
        onClick={() => setOpen(true)}
        style={{ marginLeft: 5 }}
      >
        <FontAwesomeIcon icon={faTrashAlt} />
      </Fab>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>
          Are you sure you want to delete this sentence ?
        </DialogTitle>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="secondary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default connect(
  null,
  { deleteSentence }
)(DeleteSentence);

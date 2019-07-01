import React, { Component } from "react";
import PropTypes from "prop-types";
import CustomizedIconButton from "../../utils/CustomizedIconButton";

// styles
import withStyles from "@material-ui/core/styles/withStyles";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";
import Paper from "@material-ui/core/Paper";
import {
  faIdCard,
  faImage,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";
import { faWindowClose } from "@fortawesome/free-regular-svg-icons";
import styles from "../../styles/pages/ProfileStyles";

// Redux
import { connect } from "react-redux";
import { uploadImage, logout } from "../../redux/actions/userActions";

class Profile extends Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleImageUpload = evt => {
    evt.preventDefault();
    const image = evt.target.files[0];
    const formData = new FormData();
    formData.append("image", image, image);
    this.props.uploadImage(formData);
  };

  handleEditImage = () => {
    const fileInput = document.getElementById("imageInput");
    fileInput.click();
  };

  handleLogout = () => {
    this.props.logout();
  };

  render() {
    const { classes } = this.props;
    const { likes } = this.props.user;
    const { name, imageUrl } = this.props.user.credentials;

    return (
      <>
        <div className={classes.profileIcon}>
          <CustomizedIconButton
            title="Profile"
            placement="bottom"
            onClick={this.handleOpen}
            icon={faIdCard}
            color="royalblue"
          />
        </div>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <Paper className={classes.paper}>
            <div className={classes.profile}>
              <div className="image-wrapper">
                <img src={imageUrl} alt="profile" className="profile-image" />
                <input
                  type="file"
                  id="imageInput"
                  hidden="hidden"
                  onChange={this.handleImageUpload}
                />

                <CustomizedIconButton
                  title="Upload image"
                  placement="top"
                  onClick={this.handleEditImage}
                  className={classes.button}
                  icon={faImage}
                  color="steelblue"
                />
              </div>
              <hr />
              <div>
                <h3>{name}</h3>
                <h4>{likes.length} likes</h4>
              </div>
            </div>
          </Paper>
          <DialogActions>
            <CustomizedIconButton
              title="Logout"
              placement="top"
              onClick={this.handleLogout}
              className={classes.button}
              icon={faSignOutAlt}
              color="crimson"
            />

            <CustomizedIconButton
              title="Close profile"
              placement="top"
              onClick={this.handleClose}
              className={classes.button}
              icon={faWindowClose}
              color="crimson"
            />
          </DialogActions>
        </Dialog>
      </>
    );
  }
}

Profile.propTypes = {
  user: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

const mapActionsToProps = {
  uploadImage,
  logout
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(Profile));

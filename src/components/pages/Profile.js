import React, { useState } from "react";
import CustomizedIconButton from "../../utils/CustomizedIconButton";

// styles
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";
import Paper from "@material-ui/core/Paper";
import {
  faIdCard,
  faImage,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";
import { faWindowClose } from "@fortawesome/free-regular-svg-icons";
import useStyles from "../../styles/pages/ProfileStyles";

// Redux
import { connect } from "react-redux";
import { uploadImage, logout } from "../../redux/actions/userActions";

function Profile(props) {
  const classes = useStyles();
  const { likes } = props.user;
  const { name, imageUrl } = props.user.credentials;
  const [open, setOpen] = useState(false);

  const handleImageUpload = evt => {
    evt.preventDefault();
    const image = evt.target.files[0];
    const formData = new FormData();
    formData.append("image", image, image);
    this.props.uploadImage(formData);
  };

  const handleEditImage = () => {
    const fileInput = document.getElementById("imageInput");
    fileInput.click();
  };

  const handleLogout = () => {
    props.logout();
  };

  return (
    <>
      <div className={classes.profileIcon}>
        <CustomizedIconButton
          title="Profile"
          placement="bottom"
          onClick={() => setOpen(true)}
          icon={faIdCard}
          color="royalblue"
        />
      </div>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
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
                onChange={handleImageUpload}
              />

              <CustomizedIconButton
                title="Upload image"
                placement="top"
                onClick={handleEditImage}
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
            onClick={handleLogout}
            className={classes.button}
            icon={faSignOutAlt}
            color="crimson"
          />

          <CustomizedIconButton
            title="Close profile"
            placement="top"
            onClick={() => setOpen(false)}
            className={classes.button}
            icon={faWindowClose}
            color="crimson"
          />
        </DialogActions>
      </Dialog>
    </>
  );
}

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
)(Profile);

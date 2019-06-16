import React, { Component } from 'react'
import PropTypes from 'prop-types'

// styles 
import withStyles from '@material-ui/core/styles/withStyles'
import DialogActions from '@material-ui/core/DialogActions'
import Dialog from '@material-ui/core/Dialog'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdCard, faImage, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { faWindowClose } from '@fortawesome/free-regular-svg-icons'
import styles from '../../styles/pages/ProfileStyles'

// Redux
import { connect } from 'react-redux'
import { uploadImage, logout } from '../../redux/actions/userActions'

class Profile extends Component {
  state = {
    open: false,
  }

  handleOpen = () => {
    this.setState({ open: true })
  }

  handleImageUpload = (evt) => {
    evt.preventDefault();
    const image = evt.target.files[0];
    const formData = new FormData();
    formData.append('image', image, image);
    this.props.uploadImage(formData);
  }

  handleEditImage = () => {
    const fileInput = document.getElementById('imageInput');
    fileInput.click();
  }

  handleLogout = () => {
    this.props.logout();
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  render() {
    const { classes } = this.props;
    const { likes } = this.props.user
    const { name, imageUrl } = this.props.user.credentials;
    
    return (
      <>
        <div className={classes.profileIcon}>
          <Tooltip title="Profile" placement="left">
            <IconButton  onClick={this.handleOpen} className="button">
              <FontAwesomeIcon icon={faIdCard} color="royalblue" />
            </IconButton>
          </Tooltip>
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
                <Tooltip title="Upload image" placement="top">
                  <IconButton onClick={this.handleEditImage} className="button" style={{marginLeft: 20, marginTop: 5 }}>
                    <FontAwesomeIcon icon={faImage} color="steelblue" />
                  </IconButton>
                </Tooltip>
              </div>
              <hr />
              <div>
                <h3>{name}</h3>
                <h4>{likes.length} likes</h4>
              </div>
            </div>
          </Paper>
          <DialogActions>
            <Tooltip title="Logout" placement="top">
              <IconButton onClick={this.handleLogout} className="button">
                <FontAwesomeIcon icon={faSignOutAlt} color="crimson" />
              </IconButton>
            </Tooltip>

            <Tooltip title="Close profile" placement="top">
              <IconButton  onClick={this.handleClose} className="button">
                <FontAwesomeIcon icon={faWindowClose} color="crimson" />
              </IconButton>
            </Tooltip>
        
          </DialogActions>
        </Dialog>
      </>
    )
  }
}

Profile.propTypes = {
  user: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user
})

const mapActionsToProps = {
  uploadImage,
  logout
}

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(Profile))

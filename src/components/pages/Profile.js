import React, { Component } from 'react'
import PropTypes from 'prop-types'

// styles 
import withStyles from '@material-ui/core/styles/withStyles'
import DialogActions from '@material-ui/core/DialogActions'
import Dialog from '@material-ui/core/Dialog'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdCard, faImage } from '@fortawesome/free-solid-svg-icons'
import styles from '../../styles/ProfileStyles'

// Redux
import { connect } from 'react-redux'
import { uploadImage } from '../../redux/actions/userActions'

class Profile extends Component {
  state = {
    open: false,
  }

  handleClickToggle = () => {
    this.setState({ open: !this.state.open })
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

  render() {
    const { classes } = this.props;
    const { name, imageUrl } = this.props.user.credentials;
    
    return (
      <>
        <div style={{marginTop: 10, marginLeft: 'auto', marginRight: 30, width: 50 }}>
          <Tooltip title="Profile" placement="left">
            <IconButton  onClick={this.handleClickToggle} className="button" style={{marginLeft: 20, marginTop: 5 }}>
              <FontAwesomeIcon icon={faIdCard} />
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
                    <FontAwesomeIcon icon={faImage} />
                  </IconButton>
                </Tooltip>
              </div>
              <hr />
              <div className={classes.username}>
                {name}
              </div>
            </div>
          </Paper>
          <DialogActions>
            <Button onClick={this.handleClickToggle} color="primary">
              X
            </Button>
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
  uploadImage
}

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(Profile))

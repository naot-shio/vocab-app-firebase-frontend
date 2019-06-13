import React, { Component } from 'react'
import PropTypes from 'prop-types'

// styles 
import withStyles from '@material-ui/core/styles/withStyles'
import DialogActions from '@material-ui/core/DialogActions'
import Dialog from '@material-ui/core/Dialog'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdCard } from '@fortawesome/free-solid-svg-icons'
import styles from '../../styles/ProfileStyles'

// Redux
import { connect } from 'react-redux'

class Profile extends Component {
  state = {
    open: false,
  }

  handleClickToggle = () => {
    this.setState({ open: !this.state.open })
  }

  render() {
    const { classes } = this.props;
    const { name, imageUrl } = this.props.user.credentials;
    
    return (
      <>
        <div style={{marginTop: 10 }}>
          <Button 
            variant="outlined" 
            color="primary" 
            onClick={this.handleClickToggle}
          >
            <FontAwesomeIcon icon={faIdCard} />
          </Button>
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

export default connect(mapStateToProps)(withStyles(styles)(Profile))

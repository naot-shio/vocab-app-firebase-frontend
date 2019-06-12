import React, { Component } from 'react'
import PropTypes from 'prop-types'

// styles 
import withStyles from '@material-ui/core/styles/withStyles'
import Paper from '@material-ui/core/Paper'
import styles from '../../styles/ProfileStyles'

// Redux
import { connect } from 'react-redux'

export class Profile extends Component {
  render() {
    const { classes, user: { authenticated, credentials: {name, imageUrl}} } = this.props;
    
    const profile = authenticated ? (
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
    ) : (<p>Oi</p>) 
    return profile
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

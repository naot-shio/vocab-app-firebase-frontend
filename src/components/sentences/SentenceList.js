import React, { Component } from 'react'
import AuthenticationIcon from '../auth/AuthenticationIcon'
import Profile from '../pages/Profile'
import AllSentences from './AllSentences'

// styles
import withStyles from '@material-ui/core/styles/withStyles'
import Grid from '@material-ui/core/Grid'
import DialogActions from '@material-ui/core/DialogActions'
import Dialog from '@material-ui/core/Dialog'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import styles from '../../styles/SentenceListStyles'

// Redux 
import { connect } from 'react-redux'
import { getSentences, updateSentence } from '../../redux/actions/dataActions'

class SentenceList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      open: false,
      keyword: ''
    }
    this.handleClickToggle = this.handleClickToggle.bind(this) 
  }

  componentDidMount() {
    this.props.getSentences(this.state.keyword);
  }

  handleClickToggle() {
    this.setState({ open: !this.state.open })
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    this.props.getSentences(this.state.keyword);
    this.setState({ keyword: '' })
  }

  render() {
    const { classes } = this.props;
    const { loading, sentences } = this.props.data;
    const { authenticated, credentials: { name } } = this.props.user;

    return (
      <Grid container>
        <Grid item sm={2} xs={1}>    
          <Button variant="outlined" color="primary" onClick={this.handleClickToggle}>
            Open responsive dialog
          </Button>
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="responsive-dialog-title"
          >
            <Profile />
            
            <DialogActions>
              <Button onClick={this.handleClickToggle} color="primary">
                X
              </Button>
            </DialogActions>
          </Dialog>
        </Grid>

        <Grid item sm={8} xs={10}>
          <div className={classes.textField}>
            <form onSubmit={this.handleSubmit}>
              <TextField
                name="keyword"
                type="text"
                value={this.state.keyword}
                label="search"
                onChange={this.handleChange}
                fullWidth
              />
            </form>
          </div>
          
          <AllSentences 
            sentences={sentences} 
            loading={loading} 
            authenticated={authenticated} 
            name={name}
          />
        </Grid>

        <Grid item sm={2} xs={1}>
          <div className={classes.auth}>
            <AuthenticationIcon />
          </div>
        </Grid>
      </Grid>      
    )
  }
}

const mapStateToProps = state => ({
  data: state.data,
  UI: state.UI,
  user: state.user
})

const mapActionsToProps = {
  getSentences,
  updateSentence
}

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(SentenceList))

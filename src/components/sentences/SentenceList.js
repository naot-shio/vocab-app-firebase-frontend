import React, { Component } from 'react'
import AuthenticationIcon from '../auth/AuthenticationIcon'
import Profile from '../pages/Profile'
import AllSentences from './AllSentences'

// styles
import withStyles from '@material-ui/core/styles/withStyles'
import Grid from '@material-ui/core/Grid'
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
      keyword: ''
    }
  }

  componentDidMount() {
    this.props.getSentences(this.state.keyword);
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

    const isAuthenticated = authenticated ? <Profile /> : <AuthenticationIcon />;

    return (
      <Grid container>
        <Grid item sm={2} xs={1} />

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
          {isAuthenticated}
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

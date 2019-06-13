import React, { Component } from 'react'

// styles
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import withStyles from '@material-ui/core/styles/withStyles'
import styles from '../../styles/SentenceListStyles'

export class WordMeaningList extends Component {
  handleSearch = () => {
    alert(this.props.word.english)
  }
  render() {
    const { index, i, word, classes } = this.props
    return (
      <div key={index} className={classes.word}>
        <Typography className={classes.indices}>{i+1}-{index+1}</Typography>
        <Typography className={classes.english}>
          <IconButton onClick={this.handleSearch}>
            <FontAwesomeIcon icon={faInfoCircle} className={classes.infoIcon} />
          </IconButton>
          
          {word.english}: 
        </Typography>
        <Typography className={classes.japanese}>{word.japanese}</Typography>
      </div>  
    )
  }
}

export default withStyles(styles)(WordMeaningList)

import React, { Component } from "react";
import CustomizedIconButton from "../../utils/CustomizedIconButton"
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Button from "@material-ui/core/Button";
import withStyles from '@material-ui/core/styles/withStyles';
import styles from '../../styles/pages/PaginationStyles'

class Pagination extends Component {
  render() {
    const pageNumbers = [];
    const { sentencesPerPage, totalSentences, paginate, handleToggle, open, classes } = this.props;

    for (let i = 1; i <= Math.ceil(totalSentences / sentencesPerPage); i++) {
      pageNumbers.push(i * 10);
    }

    return (
      <>
        <CustomizedIconButton
          title="Pagination"
          placement="right"
          onClick={() => handleToggle()}
          icon={faBars}
          color="royalblue"
          className={open ? classes.hideContent : classes.hamburgerButton}
        />

        <div className={open ? classes.showPagination : classes.hideContent}>  
          <CustomizedIconButton
            title="Close"
            placement="right"
            onClick={() => handleToggle()}
            icon={faTimes}
            color="white"
            className={classes.crossButton}
          />
          {pageNumbers.map((number, i) => (
            <Button
              key={number}
              onClick={() => paginate(number)}
              className={classes.paginationButton}
            >
              {pageNumbers.length - 1 === i ? (
                <>
                  {number - 9} ~ {totalSentences}
                </>
              ) : (
                <>
                  {number - 9} ~ {number}
                </>
              )}
            </Button>
          ))}
        </div>
      </>
    );
  }
}

export default withStyles(styles)(Pagination);

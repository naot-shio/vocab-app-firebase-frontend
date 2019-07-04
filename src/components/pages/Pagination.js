import React from "react";
import CustomizedIconButton from "../../utils/CustomizedIconButton";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Button from "@material-ui/core/Button";
import useStyles from "../../styles/pages/PaginationStyles";

function Pagination(props) {
  const classes = useStyles();
  const pageNumbers = [];
  const {
    sentencesPerPage,
    totalSentences,
    paginate,
    handleToggle,
    open
  } = props;

  const firstIndexOnPage = number => {
    // number is the number of the page that is multiplied by sentencesPerPage
    // Thus the first index of the page is number - sentencePerPage + 1
    return number - sentencesPerPage + 1;
  };

  for (let i = 1; i <= Math.ceil(totalSentences / sentencesPerPage); i++) {
    pageNumbers.push(i * sentencesPerPage);
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
                {firstIndexOnPage(number)} ~ {totalSentences}
              </>
            ) : (
              <>
                {firstIndexOnPage(number)} ~ {number}
              </>
            )}
          </Button>
        ))}
      </div>
    </>
  );
}

export default Pagination;

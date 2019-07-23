import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(() => ({
  hamburgerButton: {
    marginLeft: 20,
    marginTop: 20
  },
  hideContent: {
    display: "none"
  },
  paginationButton: {
    display: "block",
    color: "white",
    paddingLeft: 50
  },
  crossButton: {
    marginLeft: 20,
    marginTop: 20
  },
  "@media (max-width: 550px)": {
    hamburgerButton: {
      marginLeft: 10
    }
  },
  "@media (max-width: 400px)": {
    hamburgerButton: {
      marginTop: 5,
      marginLeft: 5
    }
  }
}));

export default useStyles;

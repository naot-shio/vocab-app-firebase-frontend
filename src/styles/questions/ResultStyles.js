import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
  inputAnswers: {
    marginBottom: 10
  },
  inputAnswer: {
    color: "green"
  },
  message: {
    textAlign: "center"
  },
  homeButton: {
    textAlign: "right",
    "& a": {
      textDecoration: "none"
    }
  }
}));

export default useStyles;

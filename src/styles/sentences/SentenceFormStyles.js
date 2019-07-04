import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(() => ({
  englishJapaneseInputForm: {
    paddingRight: "none"
  },
  textField: {
    marginTop: 5,
    marginBottom: 5
  },
  submitButton: {
    marginTop: 5,
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto"
  },
  addWord: {
    marginLeft: 50,
    marginTop: 25
  },
  "@media (max-width: 600px)": {
    addWord: {
      marginLeft: 35
    }
  },
  "@media (max-width: 500px)": {
    addWord: {
      marginLeft: 25
    }
  },
  "@media (max-width: 400px)": {
    addWord: {
      marginLeft: 15
    }
  }
}));

export default useStyles;

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
  inputWords:{
    boxSizing: 'border-box',
    width: '100%',
    border: 'none',
    borderBottom: '1px solid grey',
    marginTop: '1rem',
    height: '2.5rem',
    fontSize: '0.95rem',
    outline: 'none',
    transition: 'all 0.2s ease',

    "&:focus": {
      borderBottom: '2px solid purple',

      "&::placeholder": {
        color: 'transparent'
      }
    },

    "&::placeholder": {
      color: 'grey',
      transition: 'all 0.2s ease',
    }
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

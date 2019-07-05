import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(() => ({
  icons: {
    float: "right",
    paddingTop: 5,
    paddingBottom: 5,
    "& deleteIcon": {
      paddingLeft: 5
    }
  },
  Card: {
    margin: "0 10px 30px"
  },
  sentence: {
    fontWeight: 500,
    fontSize: "1.5rem",
    paddingLeft: 5,
    borderRadius: 5,
    marginBottom: 10,
    background: "linear-gradient(transparent 70%, #ffff00 60%)",
    userSelect: "none"
  },
  translation: {
    marginTop: 10,
    marginLeft: 15,
    fontSize: '1.1rem',
    userSelect: "none"
  }
}));

export default useStyles;

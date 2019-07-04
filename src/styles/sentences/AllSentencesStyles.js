import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(() => ({
  sentences: {
    marginTop: 20,
    maxWidth: 700,
    marginRight: "auto",
    marginLeft: "auto",
    height: "70vh",
    overflowY: "scroll"
  },
  loading: {
    width: 200,
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: 50
  }
}));

export default useStyles;

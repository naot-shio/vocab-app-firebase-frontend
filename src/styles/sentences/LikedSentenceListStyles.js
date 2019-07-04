import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(() => ({
  container: {
    display: "grid",
    gridTemplateColumns: "10% 80% 10%"
  },
  sentences: {
    marginTop: 30,
    maxWidth: 700,
    marginRight: "auto",
    marginLeft: "auto",
    height: "90vh",
    overflowY: "scroll"
  },
  likeButton: {
    marginTop: 20,
    marginLeft: "auto"
  }
}));

export default useStyles;

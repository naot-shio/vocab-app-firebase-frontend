import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  AppBar: {
    boxShadow: "none",
    marginBottom: 0 
  },
  root: {
    flexGrow: 1,
    backgroundColor: "rgba(0,0,0,0.8)",
    "& a": {
      textDecoration: "none",
      color: "#fafafa",
      fontFamily: "Serif"
    }
  },
  title: {
    flexGrow: 1,
    marginLeft: 10,
    "& a": {
      fontWeight: 600
    }
  },
}));

export default useStyles;
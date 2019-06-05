import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#fafafa",
    "& a": {
      textDecoration: "none",
      color: "#696969",
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
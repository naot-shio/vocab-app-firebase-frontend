import { makeStyles } from '@material-ui/core/styles'
import BackgroundImage from '../images/background-min.png'

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  main: {
    height: "70%",
    background: `radial-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5), rgba(0,0,0,0.1)), url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    textAlign: "center",
    "& h1": {
      marginTop: 0,
      paddingTop: 70,
      color: "#181818",
      fontFamily: "serif"
    },
    "& h3": {
      marginTop: 20
    }
  }
}));

export default useStyles;

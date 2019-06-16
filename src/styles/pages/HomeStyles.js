import { makeStyles } from '@material-ui/core/styles'
import BackgroundImage from '../../images/background-min.png'

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
  },
  main: {
    height: "100%",
    background: `radial-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5), rgba(0,0,0,0.1)), url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    textAlign: "center",
    color: "rgba(0,0,0,0.87)",
  },
  title: {
    fontSize: "5rem",
    marginTop: 0,
    paddingTop: 100,
    fontFamily: "serif"
  },
  subtitle: {
    marginTop: 20,
    fontSize: "2rem",
  },
  "@media (max-width: 645px)": {
    title: {
      fontSize: "4rem",
    }
  },
  "@media (max-width: 600px)" :{
    auth: {
      float: "right"
    },
  },
  "@media (max-width: 530px)" :{
    title: {
      fontSize: "3rem",
    }
  },
  "@media (max-width: 432px)" :{
    title: {
      paddingTop: 70
    },
    subtitle: {
      fontSize: "1.3rem",
    }
  }
}));

export default useStyles;

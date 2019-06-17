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
    fontSize: "4rem",
    marginTop: 0,
    marginBottom: 50,
    paddingTop: 100,
    fontFamily: "Hiragino Kaku Gothic Pro"
  },
  subtitle: {
    marginTop: 20,
    fontSize: "2rem",
    fontFamily: "Yu Gothic"
  },
  "@media (max-width: 970px)": {
    title: {
      fontSize: "3.5rem",
    }
  },
  "@media (max-width: 840px)" :{
    title: {
      fontSize: "3rem",
    }
  },
  "@media (max-width: 720px)" :{
    main: {
      backgroundPosition: "30%"
    },
    title: {
      fontSize: "2.5rem",
    }
  },
  "@media (max-width: 600px)" :{
    auth: {
      float: "right"
    },
  },
  "@media (max-width: 480px)" :{
    main: {
      backgroundPosition: "20%"
    },
    title: {
      fontSize: "2rem",
    }
  },
  "@media (max-width: 385px)" :{
    main: {
      backgroundPosition: "33%"
    },
    title: {
      marginTop: 50,
      fontSize: "1.7rem",
    }
  },
  "@media (max-width: 330px)" :{
    title: {
      fontSize: "1.5rem",
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

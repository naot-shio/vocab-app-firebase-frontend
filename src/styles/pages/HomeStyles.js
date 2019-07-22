import { makeStyles } from "@material-ui/core/styles";
import backgroundImage from '../../images/background-image.jpg'

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
    fontFamily: "游ゴシック体, 'Yu Gothic', YuGothic, 'ヒラギノ角ゴシック Pro'"
  },
  main: {
    height: "100%",
    background: `radial-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5), rgba(0,0,0,0.1)), url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: '0 50%',
    textAlign: "center",
    color: "rgba(0,0,0,0.87)",
  },
  sideImage: {
    paddingLeft: 0,
    marginTop: 100,
    height: 300
  },
  subtitle: {
    fontSize: "3rem",
    marginTop: 85,
    marginBottom: 20,
  },
  title: {
    fontSize: "3.8rem",
    marginTop: 20,
  },
  button: {
    margin: "30px 5px 20px"
  },
  explanation: {
    marginTop: 50
  },
  "@media (max-width: 970px)": {
    subtitle: {
      fontSize: "2.5rem"
    },
    title: {
      fontSize: "3.5rem"
    }
  },
  "@media (max-width: 1200px)": {
    main: {
      backgroundPosition: '0% 40%'
    }
  },
  "@media (max-width: 840px)": {
    main: {
      backgroundPosition: '100% 50%'
    },
    subtitle: {
      fontSize: "2rem",
      marginTop: 140
    },
    title: {
      fontSize: "3rem"
    }
  },
  "@media (max-width: 720px)": {
    main: {
      backgroundPosition: "90% 50%"
    },
    subtitle: {
      fontSize: "1.5rem"
    },
    title: {
      fontSize: "2.5rem"
    }
  },
  "@media (max-width: 600px)": {
    auth: {
      float: "right"
    },
    sideImage: {
      display: 'none'
    }
  },
  "@media (max-width: 480px)": {
    main: {
      backgroundPosition: '80%'
    },
    subtitle: {
      fontSize: "1rem"
    },
    title: {
      fontSize: "2rem"
    },
  },
  "@media (max-width: 432px)": {
    subtitle: {
      fontSize: "1.3rem"
    }
  },
  "@media (max-width: 385px)": {
    button: {
      margin: '10px 3px 0'
    },
    title: {
      fontSize: "1.7rem"
    }
  },
  "@media (max-width: 330px)": {
    title: {
      fontSize: "1.5rem"
    }
  }
}));

export default useStyles;

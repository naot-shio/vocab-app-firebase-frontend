import { makeStyles } from "@material-ui/core/styles";
import backgroundImage from "../../images/background-image.jpg";

const useStyles = makeStyles(() => ({
  main: {
    fontFamily: "游ゴシック体, 'Yu Gothic', YuGothic, 'ヒラギノ角ゴシック Pro'"
  },
  header: {
    height: "70vh",
    background: `radial-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5), rgba(101,67,33,0.1)), url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "0 30%",
    color: "rgba(0,0,0,0.87)",
    textAlign: "center"
  },
  titleAdjective: {
    fontSize: "3rem",
    marginTop: 85,
    marginBottom: 20
  },
  title: {
    fontSize: "4rem",
    marginTop: 105
  },
  subtitle: {
    marginLeft: "1rem"
  },
  authenticationButton: {
    display: "none"
  },
  authenticationContainer: {
    maxWidth: 300,
    marginRight: 40,
    marginLeft: "auto",
    marginTop: 30
  },
  authenticationForm: {
    opacity: 0.9,
    border: "rgba(255,165,0, 0.6) 1px solid",
  },
  authToggleButton: {
    backgroundColor: "rgba(248,248,248,0.9)",
    border: "rgba(255,165,0, 0.6) 1px solid",
    marginTop: 15
  },
  explanationContainer: {
    padding: "3rem 0",
    backgroundColor: "white"
  },
  explanationTitle: {
    textAlign: "center",
    fontSize: "1.5rem"
  },
  explanation: {
    paddingRight: "3rem"
  },
  explanationImage: {
    margin: "0 10%",
    maxWidth: "80%"
  },
  featureContainer: {
    padding: "3rem 0 5rem",
    textAlign: "center"
  },
  featureTitle: {
    fontSize: "1.5rem"
  },
  feature: {
    padding: 20
  },
  card: {
    "&:hover": {
      boxShadow: "0px 0px 0px 3px rgba( 0,144,255,0.5)"
    }
  },
  navigationContainer: {
    paddingTop: 30,
    paddingBottom: 70,
    backgroundColor: "white",
    textAlign: "center"
  },
  navigationTitle: {
    fontSize: "1.5rem"
  },
  notation: {
    fontSize: "0.8rem",
    paddingTop: 10
  },
  "@media (max-width: 1200px)": {
    title: {
      fontSize: "3.8rem"
    }
  },
  "@media (max-width: 1050px)": {
    title: {
      fontSize: "3.5rem"
    }
  },
  "@media (max-width: 970px)": {
    titleAdjective: {
      fontSize: "2.5rem"
    },
    title: {
      fontSize: "3rem"
    },
    explanation: {
      paddingRight: 0,
      margin: "0 10%",
      width: "80%"
    },
    explanationImage: {
      display: "none"
    }
  },
  "@media (max-width: 840px)": {
    titleAdjective: {
      fontSize: "2rem"
    },
    title: {
      fontSize: "2.5rem"
    },
    authenticationContainer: {
      marginRight: 25
    }
  },
  "@media (max-width: 720px)": {
    header: {
      backgroundPosition: "40%"
    },
    titleAdjective: {
      fontSize: "1.2rem"
    },
    title: {
      fontSize: "2rem"
    },
    authenticationContainer: {
      marginRight: 5
    }
  },
  "@media (max-width: 599px)": {
    header: {
      backgroundPosition: "60%"
    },
    authenticationButton: {
      display: "inline"
    },
    authenticationContainer: {
      display: "none"
    },
    featureContainer: {
      marginLeft: "auto",
      marginRight: "auto",
      width: "80%"
    }
  },
  "@media (max-width: 480px)": {
    header: {
      backgroundPosition: "80%"
    },
    titleAdjective: {
      fontSize: "1rem"
    },
    title: {
      fontSize: "2rem"
    }
  },
  "@media (max-width: 432px)": {
    header: {
      height: "50vh",
      backgroundPosition: "100%"
    },
    titleAdjective: {
      fontSize: "1.3rem",
      marginTop: 60
    },
    explanationContainer: {
      padding: "2rem 0"
    },
    explanationTitle: {
      fontSize: "0.8rem"
    },
    explanation: {
      fontSize: "0.8rem"
    },
    featureContainer: {
      padding: "2rem 0"
    },
    featureTitle: {
      fontSize: "0.8rem"
    },
    featureContent: {
      fontSize: "0.8rem"
    },
    feature: {
      padding: "10px 0"
    },
    navigationTitle: {
      fontSize: "0.8rem"
    },
    notation: {
      fontSize: "0.6rem",
      paddingLeft: 20,
      paddingRight: 20
    }
  },
  "@media (max-width: 385px)": {
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

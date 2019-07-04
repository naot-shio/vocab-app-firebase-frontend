import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(() => ({
  icons: {
    width: 54,
    marginTop: -35,
    marginLeft: "auto",
    marginRight: 20,
    zIndex: 5
  },
  icon: {
    marginTop: 7,
    display: "block"
  },
  hiddenIcons: {
    marginTop: 7,
    display: "block"
  },
  hideIcons: {
    display: 'none'
  },
  "@media (max-width: 600px)": {
    icons: {
      width: 54,
      marginTop: -35,
      marginLeft: -30,
      zIndex: 5
    }
  },
  "@media (max-width: 430px)": {
    hiddenIcon: {
      opacity: "0.8"
    }
  },
  "@media (max-width: 350px)": {
    icons: {
      width: 50,
      marginLeft: -35
    }
  }
}));

export default useStyles;

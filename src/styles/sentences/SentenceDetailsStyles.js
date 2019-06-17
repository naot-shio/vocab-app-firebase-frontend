const styles = {
 icons: {
    float: 'right',
    paddingTop: 5,
    paddingBottom: 5,
    '& deleteIcon': {
      paddingLeft: 5,
    }
  },
  Card: {
    margin: 30,
    width: 700,
    marginLeft: "auto",
    marginRight: "auto"
  },
  sentence: {
    fontWeight: 500,
    fontSize: "1.5rem",
    paddingLeft: 5,
    borderRadius: 5,
    marginBottom: 10,
    background: "linear-gradient(transparent 70%, #ffff00 60%)"
  },
  translation: {
      marginTop: 10,
      marginLeft: 15
    },
  "@media (max-width: 950px)": {
    Card: {
      width: 650,
    }
  },
  "@media (max-width: 800px)": {
    Card: {
      width: 500,
    }
  },
  "@media (max-width: 650px)": {
    Card: {
      width: "100%",
    }
  },
  "@media (max-width: 500px)": {
    Card: {
      width: "100%",
    }
  }
}

export default styles

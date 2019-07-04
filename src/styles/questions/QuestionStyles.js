const styles = {
  cardContent: {
    padding: 30
  },
  displayQuestion: {
    display: "block"
  },
  displayButton: {
    display: "inline",
    marginLeft: 5
  },
  hideContent: {
    display: "none"
  },
  buttons: {
    display: "block",
    textAlign: "right",
    marginTop: 20
  },
  questions: {
    margin: 100
  },
  "@media (max-width: 800px)": {
    questions: {
      margin: 80
    }
  },
  "@media (max-width: 615px)": {
    questions: {
      margin: 60,
      "& h2": {
        fontSize: "1.3rem"
      }
    }
  },
  "@media (max-width: 550px)": {
    questions: {
      marginTop: 60,
      marginLeft: 40,
      marginRight: 40,
      "& h2": {
        fontSize: "1.2rem"
      }
    }
  },
  "@media (max-width: 400px)": {
    questions: {
      marginTop: 30,
      marginLeft: 20,
      marginRight: 20,
      "& h2": {
        fontSize: "1.1rem"
      }
    }
  }
};

export default styles;

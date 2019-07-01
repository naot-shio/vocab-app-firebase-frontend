const styles = {
  root: {
    paddingBottom: 30,
    paddingLeft: 30,
    paddingRight: 30,
    textAlign: "center",
    backgroundColor: "#f5f5f5"
  },
  textField: {
    marginBottom: 5
  },
  button: {
    marginTop: 15
  },
  dialogIcon: {
    marginRight: 10,
    color: "green"
  },
  error: {
    color: "red",
    marginTop: 10
  },
  "@media (max-width: 320px)": {
    root: {
      width: 150
    },
    dialogIcon: {
      display: "none"
    }
  }
};

export default styles;

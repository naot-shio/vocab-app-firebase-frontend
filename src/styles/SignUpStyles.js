const styles = theme => ({
  root: {
    paddingBottom: 30,
    paddingLeft: 30,
    paddingRight: 30,
    textAlign: "center",
    backgroundColor: "#f5f5f5",
    [theme.breakpoints.down('xs')]: {
      width: 200
    }
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
  }
})

export default styles;
const styles = {
  showPagination: {
    backgroundColor: "rgba(0,0,0,0.8)",
    width: 250,
    height: "100vh",
    overflowY: 'scroll',
    zIndex: 5
  },
  sentences: {
    marginTop: 30,
    width: 700,
    marginLeft: "auto",
    marginRight: "auto",
    height: '85vh',
    overflowY: 'scroll'
  },
  loading: {
    width: 200,
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: 50
  },
  topField: {
    marginTop: 10,
    width: 700,
    marginLeft: "auto",
    marginRight: "auto"
  },
  textField: {
    paddingRight: 10
  },
  button: {
    marginTop: 10
  },
  buttonToPaginate: {
    textAlign: "center",
    marginBottom: 20
  },
  isAuthenticated: {
    marginRight: "auto"
  },
  hideButton: {
    display: "none"
  },
  displayButton: {
    display: "inline"
  },
  "@media (max-width: 950px)": {
    topField: {
      width: 650
    },
    sentences: {
      width: 650
    }
  },
  "@media (max-width: 800px)": {
    topField: {
      width: 500
    },
    sentences: {
      width: 500
    }
  },
  "@media (max-width: 650px)": {
    topField: {
      width: "100%"
    },
    sentences: {
      width: '100%'
    }
  },
  "@media (max-width: 600px)": {
    isAuthenticated: {
      marginLeft: 0
    }
  },
  "@media (max-width: 500px)": {
    topField: {
      width: "100%"
    },
    loading: {
      marginLeft: 30
    }
  },
  "@media (max-width: 400px)": {
    isAuthenticated: {
      marginLeft: -5
    }
  }
};

export default styles;

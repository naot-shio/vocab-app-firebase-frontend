const styles = {
  main: {
    display: 'inline-block'
  },
  showPagination: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    width: 250,
    height:'100vh',
    zIndex: 5,
    position: 'fixed'
  },
  sentences: {
    width: '100%'
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
  "@media (max-width: 950px)": {
    topField: {
      width: 650
    }
  },
  "@media (max-width: 800px)": {
    topField: {
      width: 500
    }
  },
  "@media (max-width: 650px)": {
    topField: {
      width: "100%"
    }
  },
  "@media (max-width: 600px)": {
    isAuthenticated: {
      marginLeft: 0
    },
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

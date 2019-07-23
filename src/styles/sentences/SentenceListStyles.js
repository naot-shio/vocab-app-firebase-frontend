const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "15% 70% 15%"
  },
  showPagination: {
    backgroundColor: "rgba(0,0,0,0.8)",
    zIndex: 5
  },
  likeSearchContainer: {
    marginTop: 20,
    maxWidth: 700,
    marginRight: "auto",
    marginLeft: "auto",
    display: "grid",
    gridTemplateColumns: "10% 90%"
  },
  textField: {
    marginRight: 10
  },
  loginMessageContainer: {
    marginTop: 20,
    maxWidth: 700,
    marginRight: "auto",
    marginLeft: "auto"
  },
  loginMessage: {
    marginRight: 10,
    marginLeft: 10,
    textAlign: "center",
    color: "maroon"
  },
  button: {
    marginTop: 10
  },
  buttonToPaginate: {
    textAlign: "center",
    marginBottom: 10,
    marginTop: 10
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
  "@media (max-width: 750px)": {
    container: {
      gridTemplateColumns: "20% 70% 10%"
    }
  },
  "@media (max-width: 650px)": {
    container: {
      gridTemplateColumns: "10% 80% 10%"
    },
    showPagination: {
      width: "220%"
    }
  },
  "@media (max-width: 600px)": {
    isAuthenticated: {
      marginLeft: 0
    }
  },
  "@media (max-width: 550px)": {
    showPagination: {
      width: "300%"
    }
  },
  "@media (max-width: 500px)": {
    loading: {
      marginLeft: 30
    },
    likeSearchContainer: {
      gridTemplateColumns: "15% 85%"
    }
  },
  "@media (max-width: 400px)": {
    isAuthenticated: {
      marginLeft: -5
    },
    showPagination: {
      width: "500%"
    }
  }
};

export default styles;

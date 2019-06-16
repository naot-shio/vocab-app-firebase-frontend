const styles = {
  loading: {
    width: 200,
    marginRight: 'auto',
    marginLeft: 'auto',
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
  isAuthenticated: {
    marginRight: 'auto'
  },
  "@media (max-width: 600px)" :{
    isAuthenticated: {
      marginLeft: -30
    }
  },
  "@media (max-width: 500px)" :{
    isAuthenticated: {
      marginLeft: -40
    },
    topField: {
      width: "100%",
    }
  },
  "@media (max-width: 400px)" :{
    isAuthenticated: {
      marginLeft: -50
    }
  },
  "@media (max-width: 950px)": {
    topField: {
      width: 650,
    }
  },
  "@media (max-width: 800px)": {
    topField: {
      width: 500,
    }
  },
  "@media (max-width: 650px)": {
    topField: {
      width: "100%",
    }
  }
}
  
export default styles
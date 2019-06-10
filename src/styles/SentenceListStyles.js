const styles = {
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
    backgroundColor: "#E0FFFF",
    borderRadius: 5,
    marginBottom: 10 
  },
  word: {
    display: "flex",
    alignItems: "center"
  },
  indices: {
    width: "9%",
    marginLeft: 15
  },
  english: {
    fontSize: '1.1rem',
    color: "blue",
    width: "30%",
    marginLeft: 15
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
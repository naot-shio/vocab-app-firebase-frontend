const styles = {
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
    marginLeft: 15,
  },
  "@media (max-width: 430px)": {
    indices: {
      marginLeft: 5,
      padding: 0
    },
    english: {
      marginLeft: 5,
      width: "40%"
    }
  }
}

export default styles 

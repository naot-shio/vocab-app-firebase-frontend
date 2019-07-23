import React, { Component } from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import CircularProgress from "@material-ui/core/CircularProgress";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "../../styles/sentences/DictionaryStyles";

class Dictionary extends Component {
  state = {
    loading: true,
    notFound: false,
    verb: [],
    noun: [],
    adverb: [],
    adjective: [],
    exclamation: [],
    preposition: [],
    conjugation: [],
    pronoun: [],
    determiner: [],
    errors: {}
  };

  componentDidMount() {
    // Conditions to retrieve response
    // As google dictionary API returns data by parts of speech, conditional branches are done by the parts
    // Retrieve data and push them in the array and then set a corresponding state with it
    let searchedWord = this.props.word;
    fetch(
      `https://googledictionaryapi.eu-gb.mybluemix.net/?define=${searchedWord}&lang=en`
    )
      .then(res => {
        if (res.status === 404) {
          this.setState({ notFound: true, loading: false });
        } else {
          return res.json();
        }
      })
      .then(result => {
        if (result[0].meaning) {
          let dataLength, example, exampleCapitalized;
          if (result[0].meaning.adverb) {
            dataLength = result[0].meaning.adverb.length;
            let adverbList = [];
            for (let i = 0; i < dataLength; i++) {
              example = result[0].meaning.adverb[i].example;
              if (example) {
                exampleCapitalized =
                  example.charAt(0).toUpperCase() + example.slice(1);
                adverbList.push({
                  definition: result[0].meaning.adverb[i].definition,
                  example: exampleCapitalized
                });
              } else {
                adverbList.push({
                  definition: result[0].meaning.adverb[i].definition
                });
              }
            }
            this.setState({
              adverb: adverbList
            });
          }

          if (result[0].meaning.adjective) {
            dataLength = result[0].meaning.adjective.length;
            let adjectiveList = [];
            for (let i = 0; i < dataLength; i++) {
              example = result[0].meaning.adjective[i].example;
              if (example) {
                exampleCapitalized =
                  example.charAt(0).toUpperCase() + example.slice(1);
                adjectiveList.push({
                  definition: result[0].meaning.adjective[i].definition,
                  example: exampleCapitalized
                });
              } else {
                adjectiveList.push({
                  definition: result[0].meaning.adjective[i].definition
                });
              }
            }
            this.setState({
              adjective: adjectiveList
            });
          }

          if (result[0].meaning.verb) {
            dataLength = result[0].meaning.verb.length;
            let verbList = [];
            for (let i = 0; i < dataLength; i++) {
              example = result[0].meaning.verb[i].example;
              if (example) {
                exampleCapitalized =
                  example.charAt(0).toUpperCase() + example.slice(1);
                verbList.push({
                  definition: result[0].meaning.verb[i].definition,
                  example: exampleCapitalized
                });
              } else {
                verbList.push({
                  definition: result[0].meaning.verb[i].definition
                });
              }
            }
            this.setState({
              verb: verbList
            });
          }

          if (result[0].meaning.noun) {
            dataLength = result[0].meaning.noun.length;
            let nounList = [];
            for (let i = 0; i < dataLength; i++) {
              example = result[0].meaning.noun[i].example;
              if (example) {
                exampleCapitalized =
                  example.charAt(0).toUpperCase() + example.slice(1);
                nounList.push({
                  definition: result[0].meaning.noun[i].definition,
                  example: exampleCapitalized
                });
              } else {
                nounList.push({
                  definition: result[0].meaning.noun[i].definition
                });
              }
            }
            this.setState({
              noun: nounList
            });
          }

          if (result[0].meaning.exclamation) {
            dataLength = result[0].meaning.exclamation.length;
            let exclamationList = [];
            for (let i = 0; i < dataLength; i++) {
              example = result[0].meaning.exclamation[i].example;
              if (example) {
                exampleCapitalized =
                  example.charAt(0).toUpperCase() + example.slice(1);
                exclamationList.push({
                  definition: result[0].meaning.exclamation[i].definition,
                  example: exampleCapitalized
                });
              } else {
                exclamationList.push({
                  definition: result[0].meaning.exclamation[i].definition
                });
              }
            }
            this.setState({
              exclamation: exclamationList
            });
          }

          if (result[0].meaning.preposition) {
            dataLength = result[0].meaning.preposition.length;
            let prepositionList = [];
            for (let i = 0; i < dataLength; i++) {
              example = result[0].meaning.preposition[i].example;
              if (example) {
                exampleCapitalized =
                  example.charAt(0).toUpperCase() + example.slice(1);
                prepositionList.push({
                  definition: result[0].meaning.preposition[i].definition,
                  example: exampleCapitalized
                });
              } else {
                prepositionList.push({
                  definition: result[0].meaning.preposition[i].definition
                });
              }
            }
            this.setState({
              preposition: prepositionList
            });
          }

          if (result[0].meaning.conjugation) {
            dataLength = result[0].meaning.conjugation.length;
            let conjugationList = [];
            for (let i = 0; i < dataLength; i++) {
              example = result[0].meaning.conjugation[i].example;
              if (example) {
                exampleCapitalized =
                  example.charAt(0).toUpperCase() + example.slice(1);
                conjugationList.push({
                  definition: result[0].meaning.conjugation[i].definition,
                  example: exampleCapitalized
                });
              } else {
                conjugationList.push({
                  definition: result[0].meaning.conjugation[i].definition
                });
              }
            }
            this.setState({
              conjugation: conjugationList
            });
          }

          if (result[0].meaning.pronoun) {
            dataLength = result[0].meaning.pronoun.length;
            let pronounList = [];
            for (let i = 0; i < dataLength; i++) {
              example = result[0].meaning.pronoun[i].example;
              if (example) {
                exampleCapitalized =
                  example.charAt(0).toUpperCase() + example.slice(1);
                pronounList.push({
                  definition: result[0].meaning.pronoun[i].definition,
                  example: exampleCapitalized
                });
              } else {
                pronounList.push({
                  definition: result[0].meaning.pronoun[i].definition
                });
              }
            }
            this.setState({
              pronoun: pronounList
            });
          }
          if (result[0].meaning.determiner) {
            dataLength = result[0].meaning.determiner.length;
            let determinerList = [];
            for (let i = 0; i < dataLength; i++) {
              example = result[0].meaning.determiner[i].example;
              if (example) {
                exampleCapitalized =
                  example.charAt(0).toUpperCase() + example.slice(1);
                determinerList.push({
                  definition: result[0].meaning.determiner[i].definition,
                  example: exampleCapitalized
                });
              } else {
                determinerList.push({
                  definition: result[0].meaning.determiner[i].definition
                });
              }
            }
            this.setState({
              determiner: determinerList
            });
          }
        }
        return this.state;
      })
      .then(() => {
        this.setState({ loading: false });
      })
      .catch(err => this.setState({ errors: err }));
  }

  render() {
    const {
      notFound,
      noun,
      verb,
      adjective,
      adverb,
      conjugation,
      exclamation,
      preposition,
      loading,
      determiner,
      pronoun
    } = this.state;

    const { classes } = this.props;

    const isNotFound = notFound && (
      <DialogContentText>Sorry, not found</DialogContentText>
    );

    const showWordAndMeanings = loading ? (
      <div className={classes.loading}>
        <CircularProgress size={150} />
      </div>
    ) : (
      <>
        {noun.length > 0 &&
          noun.map((noun, i) => (
            <DialogContent className={classes.dialogContent} key={i}>
              {noun.definition !== undefined && (
                <DialogContentText>
                  名詞{i + 1}: {noun.definition}
                </DialogContentText>
              )}
              {noun.example && (
                <DialogContentText>
                  例文{i + 1}: {noun.example}
                </DialogContentText>
              )}
            </DialogContent>
          ))}
        {verb.length > 0 &&
          verb.map((verb, i) => (
            <DialogContent className={classes.dialogContent} key={i}>
              {verb.definition !== undefined && (
                <DialogContentText>
                  動詞{i + 1}: {verb.definition}
                </DialogContentText>
              )}
              {verb.example && (
                <DialogContentText>
                  例文{i + 1}: {verb.example}
                </DialogContentText>
              )}
            </DialogContent>
          ))}
        {adjective.length > 0 &&
          adjective.map((adjective, i) => (
            <DialogContent className={classes.dialogContent} key={i}>
              {adjective.definition !== undefined && (
                <DialogContentText>
                  形容詞{i + 1}: {adjective.definition}
                </DialogContentText>
              )}
              {adjective.example && (
                <DialogContentText>
                  例文{i + 1}: {adjective.example}
                </DialogContentText>
              )}
            </DialogContent>
          ))}
        {adverb.length > 0 &&
          adverb.map((adverb, i) => (
            <DialogContent className={classes.dialogContent} key={i}>
              {adverb.definition !== undefined && (
                <DialogContentText>
                  副詞{i + 1}: {adverb.definition}
                </DialogContentText>
              )}
              {adverb.example && (
                <DialogContentText>
                  例文{i + 1}: {adverb.example}
                </DialogContentText>
              )}
            </DialogContent>
          ))}
        {conjugation.length > 0 &&
          conjugation.map((conjugation, i) => (
            <DialogContent className={classes.dialogContent} key={i}>
              {conjugation.definition !== undefined && (
                <DialogContentText>
                  接続詞{i + 1}: {conjugation.definition}
                </DialogContentText>
              )}
              {conjugation.example && (
                <DialogContentText>
                  例文{i + 1}: {conjugation.example}
                </DialogContentText>
              )}
            </DialogContent>
          ))}
        {exclamation.length > 0 &&
          exclamation.map((exclamation, i) => (
            <DialogContent className={classes.dialogContent} key={i}>
              {exclamation.definition !== undefined && (
                <DialogContentText>
                  感嘆詞{i + 1}: {exclamation.definition}
                </DialogContentText>
              )}
              {exclamation.example && (
                <DialogContentText>
                  例文{i + 1}: {exclamation.example}
                </DialogContentText>
              )}
            </DialogContent>
          ))}
        {preposition.length > 0 &&
          preposition.map((preposition, i) => (
            <DialogContent className={classes.dialogContent} key={i}>
              {preposition.definition !== undefined && (
                <DialogContentText>
                  前置詞{i + 1}: {preposition.definition}
                </DialogContentText>
              )}
              {preposition.example && (
                <DialogContentText>
                  例文{i + 1}: {preposition.example}
                </DialogContentText>
              )}
            </DialogContent>
          ))}
        {determiner.length > 0 &&
          determiner.map((determiner, i) => (
            <DialogContent className={classes.dialogContent} key={i}>
              {determiner.definition !== undefined && (
                <DialogContentText>
                  前置詞{i + 1}: {determiner.definition}
                </DialogContentText>
              )}
              {determiner.example && (
                <DialogContentText>
                  例文{i + 1}: {determiner.example}
                </DialogContentText>
              )}
            </DialogContent>
          ))}
        {pronoun.length > 0 &&
          pronoun.map((pronoun, i) => (
            <DialogContent className={classes.dialogContent} key={i}>
              {pronoun.definition !== undefined && (
                <DialogContentText>
                  前置詞{i + 1}: {pronoun.definition}
                </DialogContentText>
              )}
              {pronoun.example && (
                <DialogContentText>
                  例文{i + 1}: {pronoun.example}
                </DialogContentText>
              )}
            </DialogContent>
          ))}
      </>
    );

    return (
      <div>
        <DialogTitle>{this.props.word}</DialogTitle>
        {isNotFound}
        {showWordAndMeanings}
      </div>
    );
  }
}

export default withStyles(styles)(Dictionary);

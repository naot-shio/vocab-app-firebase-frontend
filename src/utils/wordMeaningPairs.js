const wordMeaningParis = (sentence) => {
  if (sentence.words.length === sentence.meanings.length) {
    let wordSets = [];
    for( let i = 0; i < sentence.words.length; i++) {
      wordSets.push([sentence.words[i], sentence.meanings[i]]);
    }
    return wordSets
  }
  return null;
}

export default wordMeaningParis;
import { LOADING_DATA, SET_SENTENCES, POST_SENTENCE, UPDATE_SENTENCE, SET_SENTENCE, DELETE_SENTENCE } from "../types";

const initialState = {
  sentences: [],
  sentence: {},
  loading: false
}

export default function(state=initialState, action) {
  switch(action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true
      }
    case SET_SENTENCES:
      return {
        ...state,
        sentences: action.payload,
        loading: false
      }
    case SET_SENTENCE:
      return {
        ...state,
        sentence: action.payload
      }
    case POST_SENTENCE:
      return {
        ...state,
        sentences: [
          ...state.sentences,
          action.payload
        ]
      }
    case UPDATE_SENTENCE:
      return {
        ...state,
        sentence: action.payload
      }
    case DELETE_SENTENCE:
      let index = state.sentences.findIndex(
        sentence => sentence.sentenceId === action.payload
      );
      state.sentences.splice(index, 1);
      return {
        ...state
      };
    default: 
      return state;
  }
}

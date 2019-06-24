import {
  LOADING_DATA,
  SET_SENTENCES,
  POST_SENTENCE,
  UPDATE_SENTENCE,
  SET_SENTENCE,
  DELETE_SENTENCE,
  LIKE_SENTENCE,
  UNLIKE_SENTENCE
} from "../types";

const initialState = {
  sentences: [],
  sentence: {},
  loading: false
};

export default function(state = initialState, action) {
  let index = state.sentences.findIndex(
    sentence => sentence.sentenceId === action.payload
  );
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true
      };
    case SET_SENTENCES:
      return {
        ...state,
        sentences: action.payload,
        loading: false
      };
    case SET_SENTENCE:
      return {
        ...state,
        sentence: action.payload
      };
    case POST_SENTENCE:
      return {
        ...state,
        sentences: [...state.sentences, action.payload]
      };
    case UPDATE_SENTENCE:
      return {
        ...state,
        sentence: action.payload
      };
    case DELETE_SENTENCE:
      state.sentences.splice(index, 1);
      return {
        ...state
      };
    case LIKE_SENTENCE:
    case UNLIKE_SENTENCE:
      state.sentences[index] = action.payload;
      return {
        ...state
      };
    default:
      return state;
  }
}

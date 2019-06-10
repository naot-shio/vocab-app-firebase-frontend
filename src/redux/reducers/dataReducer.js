import { LOADING_DATA, SET_SENTENCES, POST_SENTENCE } from "../types";

const initialState = {
  sentences: [],
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
    case POST_SENTENCE:
      return {
        ...state,
        sentences: [
          ...state.sentences,
          action.payload
        ]
      }
    default: 
      return state;
  }
}

import {
  SET_USER,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  LOADING_USER,
  LIKE_SENTENCE,
  UNLIKE_SENTENCE
} from "../types";

const initialState = {
  authenticated: false,
  loading: false,
  credentials: {},
  likes: [],
  stocks: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true
      };
    case SET_UNAUTHENTICATED:
      return initialState;
    case SET_USER:
      return {
        authenticated: true,
        loading: false,
        ...action.payload
      };
    case LOADING_USER:
      return {
        ...state,
        loading: true
      };
    case LIKE_SENTENCE:
      return {
        ...state,
        likes: [
          ...state.likes,
          {
            userName: state.credentials.name,
            sentenceId: action.payload.sentenceId
          }
        ]
      };
    case UNLIKE_SENTENCE:
      return {
        ...state,
        likes: state.likes.filter(
          like => like.sentenceId !== action.payload.sentenceId
        )
      };
    default:
      return state;
  }
}

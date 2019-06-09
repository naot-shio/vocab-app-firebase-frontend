import { LOADING_DATA, SET_SENTENCES } from "../types";

const initialState = {
  sentences: [],
  sentence: {},
  loading: false
}

export default function(state=initialState, action) {
  let index;
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
    default: 
      return state;
  }
}

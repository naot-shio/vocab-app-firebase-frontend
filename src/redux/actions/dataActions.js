import { LOADING_DATA, SET_SENTENCES, LOADING_UI, POST_SENTENCE, SET_ERRORS, CLEAR_ERRORS } from "../types";
import axios from 'axios'

export const getSentences = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios.get('/sentences')
    .then(res => {
      dispatch({
        type: SET_SENTENCES,
        payload: res.data
      })
    })
    .catch(() => {
      dispatch({
        type: SET_SENTENCES,
        payload: []
      })
    })
}

export const postSentence = (newSentence) => (dispatch) => {
  dispatch({ type: LOADING_UI })
  axios
    .post('/sentence', newSentence)
    .then(res => {
      dispatch({ 
        type: POST_SENTENCE,
        payload: res.data
      });
      dispatch({ type: CLEAR_ERRORS })
    })
    .catch(err => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      })
    })
}
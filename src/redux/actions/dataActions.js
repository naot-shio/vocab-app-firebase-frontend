import { 
  LOADING_DATA,
  SET_SENTENCES,
  LOADING_UI,
  POST_SENTENCE,
  SET_ERRORS,
  CLEAR_ERRORS,
  UPDATE_SENTENCE,
  DELETE_SENTENCE,
  LIKE_SENTENCE,
  UNLIKE_SENTENCE
} from "../types";

import axios from 'axios'

export const getSentences = (keyword) => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios.get('/sentences', {
    params: {
      keyword: keyword
    }
  })
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

export const updateSentence = (sentenceId, sentenceData) => (dispatch) => {
  dispatch({ type: LOADING_UI })
  axios
    .put(`/sentence/${sentenceId}`, sentenceData)
    .then(res => {
      dispatch({
        type: UPDATE_SENTENCE,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      })
    })
}

export const deleteSentence = (sentenceId) => (dispatch) => {
  axios
    .delete(`/sentence/${sentenceId}`)
    .then(() => {
      dispatch({ type: DELETE_SENTENCE, payload: sentenceId });
    })
    .catch((err) => console.log(err));
};

export const likeSentence = (sentenceId) => (dispatch) => {
  axios
    .get(`/sentence/${sentenceId}/like`)
    .then(res => {
      dispatch({
        type: LIKE_SENTENCE,
        payload: res.data
      })
    })
    .catch(err => console.log(err))
}

export const unlikeSentence = (sentenceId) => (dispatch) => {
  axios
    .get(`/sentence/${sentenceId}/unlike`)
    .then(res => {
      dispatch({
        type: UNLIKE_SENTENCE,
        payload: res.data
      })
    })
    .catch(err => console.log(err))
}
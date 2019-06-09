import { LOADING_DATA, SET_SENTENCES } from "../types";
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
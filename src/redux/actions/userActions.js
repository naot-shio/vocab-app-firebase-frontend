import axios from 'axios'
import { SET_USER, SET_ERRORS, CLEAR_ERRORS, LOADING_UI, LOADING_USER} from '../types'

export const signUpUser = (newUserData) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post('/signup', newUserData)
    .then(res => {
      const FBIdToken = `Bearer ${res.data.token}`;
      localStorage.setItem('FBIdToken', FBIdToken);
      axios.defaults.headers.common['Authorization'] = FBIdToken;
      dispatch(getUserData());
      dispatch({ type: CLEAR_ERRORS });
    })
    .catch((err) => {
      dispatch({ 
        type: SET_ERRORS,
        payload: err.response.data
      });
    });
}

export const loginUser = (userData) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
  .post('/login', userData)
  .then(res => {
    console.log(res.data);
    const FBIdToken = `Bearer ${res.data.token}`;
    localStorage.setItem('FBIdToken', FBIdToken);
    axios.defaults.headers.common['Authorization'] = FBIdToken;
    dispatch(getUserData());
    dispatch({ type: CLEAR_ERRORS });
  })
  .catch((err) => {
    console.log(err.response.data)
    dispatch({
      type: SET_ERRORS,
      payload: err.response.data
    })
  });
}

export const getUserData = () => (dispatch) => {
  dispatch({ type: LOADING_USER });
  axios
    .get('/user')
    .then(res => {
      dispatch({ 
        type: SET_USER,
        payload: res.data
      })
    })
    .catch(err => console.error(err))
}
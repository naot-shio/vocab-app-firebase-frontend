import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import axios from 'axios'
import jwtDecode from 'jwt-decode'

// JS files
import Navbar from './components/pages/Navbar'
import Home from './components/pages/Home'
import SentenceList from './components/sentences/SentenceList'
import UpdateSentence from './components/sentences/UpdateSentence';
import './App.css'
// redux
import { Provider } from 'react-redux'
import store from './redux/store'
import { SET_AUTHENTICATED } from './redux/types'
import { getUserData, logout } from './redux/actions/userActions'

const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 10000 < Date.now()) {
    store.dispatch(logout());
    window.location.href = '/login'; 
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common['Authorization'] = token;
    store.dispatch(getUserData())
  }
}

class App extends Component {
  render() {
     return (
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route 
                exact 
                path="/words" 
                render={routeProps => (
                  <SentenceList 
                    {...routeProps}
                  />)} 
              />
              <Route 
                exact 
                path="/word/:sentenceId" 
                render={routeProps => 
                  <UpdateSentence 
                    sentenceId={routeProps.match.params.sentenceId}
                    {...routeProps}
                  />}
                />
            </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
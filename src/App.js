import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// JS files
import Navbar from './components/pages/Navbar'
import Home from './components/pages/Home'
import WordList from './components/words/WordList'
import './App.css'
// redux
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/words" component={WordList} />
          </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

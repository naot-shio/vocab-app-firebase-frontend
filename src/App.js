import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/pages/Home'
import Navbar from './components/pages/Navbar'
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
          </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

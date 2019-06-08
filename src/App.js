import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/pages/Home'
import Navbar from './components/pages/Navbar'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;

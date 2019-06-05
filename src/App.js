import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './components/pages/Home'
import Navbar from './components/pages/Navbar'
import SignUp from './components/auth/SignUp'
import Login from './components/auth/Login'
import './App.css'

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;

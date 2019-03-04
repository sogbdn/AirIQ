import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

import App from './App';
import FrontPage from './components/pages/FrontPage';
import Contact from './components/pages/Contact';
import AirIndex from './components/pages/AirIndex';
import Forecast from './components/pages/Forecast';
import Login from './components/pages/Login';
import MapView from './components/pages/MapView';
import Registration from './components/pages/Registration';
import UserProfile from './components/pages/UserProfile';

ReactDOM.render((
  <Router history = {browserHistory}>
  <Route path='/' component={App}>
    <IndexRoute component={FrontPage} />
    <Route path='contact' component={Contact} />
    <Route path='frontpage' component={FrontPage} />
    <Route path='airindex' component={AirIndex} />
    <Route path='forecast' component={ForeCast} />
    <Route path='login' component={Login} />
    <Route path='mapview' component={MapView} />
    <Route path='registration' component={Registration} />
    <Route path='profile' component={UserProfile} />
    <Route path='*' component={FrontPage} />
  </Route>
  </Router>
), document.getElementById('router'))

//---code reference for post routes:

// <Route path='registration/:newuser' component={NewUser}/>
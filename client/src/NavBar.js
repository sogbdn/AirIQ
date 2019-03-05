import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// https://unpkg.com/react-bootstrap@1.0.0-beta.5/Form.js
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav'

// import the pages for react router dom
import Registration from './components/pages/Registration'
import Login from './components/pages/Login'
import UserProfile from './components/pages/UserProfile'
import MapView from './components/pages/MapView'
import AirIndex from './components/pages/AirIndex'
import About from './components/pages/About'
import AirCard from './components/partials/_AirCard'
import RegistrationComp from './components/pages/Registrationcomplete'

//import ModalHeader from 'react-bootstrap/ModalHeader'
import 'bootstrap/dist/css/bootstrap.min.css';
//import Container from 'react-bootstrap/Container';

class NavBar extends Component {

  componentDidMount() {
    console.log("NavBar Mounted");
  }
  render() {
    return (
      /*Router only takes one child element, hence the div */
    <Router>
      <div>
        <Navbar collapseOnSelect expand="md" className="navbar-custom" variant="dark">
          <Navbar.Brand>
            <Link to={'/'}> AirIQ </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                <Link to={'/airQuality'}>Air Quality Index</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to={'/map'}>Map View</Link>
              </Nav.Link>
              <NavDropdown title="User Area" id="collasible-nav-dropdown">
                <NavDropdown.Item>
                  <Link to={'/login'}>Login</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to={'/user'}>User Profile</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to={'/register'}>Register</Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route exact path='/' component={AirCard} />
          <Route path='/concerns' component={About} />
          <Route path='/airQuality' component={AirIndex} />
          <Route path='/map' component={MapView} />
          <Route path='/login' component={Login} />
          <Route path='/user' component={UserProfile} />
          <Route path='/register' component={Registration} />
          <Route path='/registrationcomplete' component={RegistrationComp} />
        </Switch>
      </div>
    </Router>
    );
  }
}

export default NavBar;

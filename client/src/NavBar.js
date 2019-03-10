import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// https://unpkg.com/react-bootstrap@1.0.0-beta.5/Form.js
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav'

//import withAuth from './components/withAuth';
//import ModalHeader from 'react-bootstrap/ModalHeader'
import 'bootstrap/dist/css/bootstrap.min.css';
//import Container from 'react-bootstrap/Container';

class NavBar extends Component {


  handleSubmit = (event) => {
    localStorage.removeItem("token")
  }

  componentDidMount() {
    console.log("NavBar Mounted");
  }
  render() {
    
      /*Router only takes one child element, hence the div */
      const currentUser = localStorage.getItem('token');
  if (currentUser) {
    return (
      <>
        <Navbar collapseOnSelect expand="md" className="navbar-custom" variant="dark">
          <Navbar.Brand>
            <Link to={'/'}> AirIQ </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Link to={'/features'}>Features</Link>
                <Link to={'/airQindex'}>AirIQ Index</Link>
                <Link to={'/map'}>Map View</Link>
              <NavDropdown title="User Area" id="collasible-nav-dropdown">
                  <Link to={'/about'} className="dropdown-item">Other Resources</Link>
                  <Link to={'/user'} className="dropdown-item">User Profile</Link>
                  <Link
                    to={'/login'}
                    onClick={e => this.handleSubmit(e)}
                    className="dropdown-item"
                    >Logout
                  </Link>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    )
  } else {
    return (
    <>
        <Navbar collapseOnSelect expand="md" className="navbar-custom" variant="dark">
          <Navbar.Brand>
            <Link to={'/'}> AirIQ </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Link to={'/features'}>Features</Link>
                <Link to={'/airQindex'}>AirIQ Index</Link>
                <Link to={'/map'}>Map View</Link>
              <NavDropdown title="Login/Register" id="collasible-nav-dropdown">
                
                <Link to={'/login'} className="dropdown-item">Login</Link>
                <Link to={'/register'} className="dropdown-item">Register</Link>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    )
  }
}
}

export default NavBar;

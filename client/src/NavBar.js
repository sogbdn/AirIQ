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
      const currentUser = localStorage.getItem('token')

  if (currentUser) {
    return (
      <div>
        <Navbar collapseOnSelect expand="md" className="navbar-custom" variant="dark">
          <Navbar.Brand>
            <Link to={'/'}> AirIQ </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">

                <Link to={'/features'}>Services</Link>

                <Link to={'/airQindex'}>About Air Quality Index</Link>

                <Link to={'/map'}>Map View</Link>

              <NavDropdown title="User Area" id="collasible-nav-dropdown">
                <NavDropdown.Item>
                <Nav.Link>
                <Link to={'/about'}>Other Resources</Link>
              </Nav.Link>

                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to={'/user'}>User Profile</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                 <Link
                  to={'/login'}
                  onClick={e => this.handleSubmit(e)}
                 >Logout</Link>
                 </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  } else {
    return (
    <div>
        <Navbar collapseOnSelect expand="md" className="navbar-custom" variant="dark">
          <Navbar.Brand>
            <Link to={'/'}> AirIQ </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link>
                <Link to={'/features'}>Services</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to={'/airQindex'}>About Air Quality Index</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to={'/map'}>Map View</Link>
              </Nav.Link>
              <NavDropdown title="User Area" id="collasible-nav-dropdown">
                <NavDropdown.Item>
                <Nav.Link>
                <Link to={'/about'}>Other Resources</Link>
              </Nav.Link>
                  <Link to={'/login'}>Login</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to={'/register'}>Register</Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}
}

export default NavBar;

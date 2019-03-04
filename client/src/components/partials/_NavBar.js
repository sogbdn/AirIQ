import React, { Component } from 'react';

// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Nav from 'react-bootstrap/Nav'

//import ModalHeader from 'react-bootstrap/ModalHeader'
import 'bootstrap/dist/css/bootstrap.min.css';
//import Container from 'react-bootstrap/Container';

export default class NavBar extends Component {

  componentDidMount() {
    console.log("NavBar Mounted");
  }
  render() {
    return (

      <div>NavBar Placeholder</div>
  
    // <Navbar collapseOnSelect expand="md" className="navbar-custom" variant="dark">
    // <Navbar.Brand href="#home">AirIQ</Navbar.Brand>
    //   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //     <Navbar.Collapse id="responsive-navbar-nav">
    //       <Nav className="mr-auto">
    //         <Nav.Link href="#features">Air Quality Index</Nav.Link>
    //         <Nav.Link href="#pricing">Map View
    //         </Nav.Link>
    //         <NavDropdown title="User Area" id="collasible-nav-dropdown">
    //           <NavDropdown.Item href="#user/login">Login
    //           </NavDropdown.Item>
    //           <NavDropdown.Item href="#user/profile">User Profile
    //           </NavDropdown.Item>
    //           <NavDropdown.Item href="#register">Register
    //           </NavDropdown.Item>
    //         </NavDropdown>
    //       </Nav>
    //     </Navbar.Collapse>
    // </Navbar>
    );
  }
}




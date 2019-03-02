import React, { Component } from 'react';
// https://unpkg.com/react-bootstrap@1.0.0-beta.5/Form.js
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Register extends Component {

  componentDidMount() {
    console.log("Register Mounted");
  }
  render() {
    return (
      <Form>
    <Form.Group controlId="formFirstName">
    <Form.Label>First Name</Form.Label>
    <Form.Control type="text" placeholder="Enter first name" />
    
  </Form.Group>

  <Form.Group controlId="formLastName">
    <Form.Label>Last Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Last name" />
  </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="formPhoneNumber">
    <Form.Label>Phone Number *</Form.Label>
    <Form.Control type="string" placeholder="Enter number for opt in sms alerts" />
  </Form.Group>
  <Form.Group controlId="formBasicChecbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Example select</Form.Label>
    <Form.Control as="select">
      <option>General Concern</option>
      <option>Medical Concern</option>
      <option>Lifestyle/Sport Concern</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formPasswordConfirm">
    <Form.Label>Password Confirmation</Form.Label>
    <Form.Control type="password" placeholder="Password confirmation" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
      
    );
  }
}

export default Register;
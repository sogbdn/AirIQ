import React, { Component } from 'react';
// https://unpkg.com/react-bootstrap@1.0.0-beta.5/Form.js
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup'
import Container from 'react-bootstrap/Container'

class Register extends Component {

  componentDidMount() {
    console.log("Register Mounted");
  }
  render() {
    return (
      <Container>
      <Form
      noValidate
      validated={'validated'}
      onSubmit={e => this.handleSubmit(e)}
    >
      <Form.Row>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue="Mark"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue="Otto"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomEmail">
          <Form.Label>Email</Form.Label>
          <InputGroup>
            <Form.Control
              type="email"
              placeholder="Email"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please enter a valid email.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        
        <Form.Group as={Col} md="6" controlId="validationCustom05">
        <Form.Label>Phone Number * Optional SMS alerts</Form.Label>
          <Form.Control type="num" placeholder="Phone Number" required />
        <Form.Control.Feedback>
        {['checkbox'].map(type => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check inline label="Best AirQ days" type={type} id={`inline-${type}-1 inline-${type}-2`} />
      <Form.Check inline label="Poor AirQ days" type={type} id={`inline-${type}-2`} />
    </div>
      ))}
      </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom03">
          
          
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          
        </Form.Group>
      </Form.Row>
      <Form.Group>
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
    </Container>
    );
  }
}

export default Register;

// bsPrefix	
// string
// 'form-group'	
// Change the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css.
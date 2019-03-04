import React, { Component } from 'react';
// https://unpkg.com/react-bootstrap@1.0.0-beta.5/Form.js
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup'
import Container from 'react-bootstrap/Container'

class Register extends Component {

  constructor() {
    super();
    this.state = {
      first_name: {
        value: '',
        validation: null
      },

      last_name: {
        value: '',
        validation: null
      },
      email: {
        value: '',
        validation: null
      },
      concern_type: {
        value: '',
        validation: null
      },
      phone_number: {
        value: '',
        validation: null
      },
      good_days: {
        value: '',
        validation: null
      },
      bad_days: {
        value: '',
        validation: null
      }
      //validated: false  ///set validation in the state
    };
  }

  onChange = (e) => {
    /*
      Because we named the inputs to match their
      corresponding values in state, it's
      super easy to update the state

      //e.target.name ? first_name

      //this.state = {
        first_name: {}
      }
      onChange
      //check validity
      this.setState({ [e.target.name]: e.target.value })
      //assign value then the validity
      each control get the value

      //two props to manage is '' Valid  isInvalid is true
//if i want the green checks --- this is where

    */
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (event) => {
  event.preventDefault()
  const { fname, lname, email } = this.state;

  axios.post('/', { fname, lname, email })
    .then((result) => {
      //access the results here....
    });
  }
  

  componentDidMount() {
    console.log("Register Mounted");
  }
  render() { 

    const {first_name, last_name, email, phone_number, good_days, bad_days, concern_type} = this.state;

    return (
      <Container>
      <Form
      //noValidate
      //validated={'validated'}
      onSubmit={e => this.handleSubmit(e)}
    >
      <Form.Row>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            name="first_name"
            value={first_name}
            onChange={this.onChange}
            placeholder="First name"
            //defaultValue="Mark"
            //validated={}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            name="last_name"
            value={last_name}
            onChange={this.onChange}
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
              name="email"
              value={email}
              onChange={this.onChange}
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
      <Form.Group as={Col} md="3" controlId="validationCustom03">
    <Form.Label>Health Concern Teir*</Form.Label>
    <Form.Control as="select" multiple>
      <option>General Health Interest</option>
      <option>Medical Concern</option>
      <option>Lifestyle/Sports Concern</option>
    </Form.Control>
  </Form.Group>
        
        <Form.Group as={Col} md="6" controlId="validationCustom05">
        <Form.Label>Phone Number * Optional SMS alerts</Form.Label>
          <Form.Control type="num" 
          placeholder="Phone Number" 
          name="phone_number"
          value={phone_number}
          onChange={this.onChange}
          required />
        <Form.Control.Feedback>
        {['checkbox'].map(type => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check inline label="Best AirQ days" 
      type={type} 
      id={`inline-${type}-1 inline-${type}-2`} />
      <Form.Check inline label="Poor AirQ days" type={type} id={`inline-${type}-2`} />
    </div>
      ))}
      </Form.Control.Feedback>
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
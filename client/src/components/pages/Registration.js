import React, { Component } from "react";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup'
import Container from 'react-bootstrap/Container'
import axios from 'axios';

//Registration form copied from register.js
export default class Registration extends Component {

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

    //const validentries = ^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$

    // if (e.target.name === "phone_number") {
    //   if (e.target.value.match(validentries))
          //validation = true
    // }


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
    this.setState({ [e.target.name]: {value: e.target.value} });
  }

  handleSubmit = (event) => {
  event.preventDefault()
  const { first_name, last_name, email, phone_number, concern_type, good_days, bad_days } = this.state;

  axios.post('/register', {first_name: first_name.value, last_name: last_name.value, email: email.value, phone_number: phone_number.value, concern_type: concern_type.value, good_days: good_days.value, bad_days: bad_days.value})
    .then((result) => {
      //access the results here....
      console.log('server responded', result)
    });
  }

  componentDidMount() {
    console.log("Registation Mounted");
  }

  render() {

    const {first_name, last_name, email, phone_number, good_days, bad_days, concern_type} = this.state;

    return (
      <div>
      <Container>
      <Form
      // noValidate
      // validated={'validated'}
      onSubmit={e => this.handleSubmit(e)}
    >
      <Form.Row>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            name="first_name"
            value={first_name.value}
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
            value={last_name.value}
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
              value={email.value}
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
    <Form.Control as="select"
    name="concern_type"
    value={concern_type.value}
    onChange={this.onChange}
    required
    >
      <option value="general_concern">General Health Interest</option>
      <option value="medical_concern">Medical Concern</option>
      <option value="lifestyle">Lifestyle/Sports Concern</option>
    </Form.Control>
  </Form.Group>

        <Form.Group as={Col} md="6" controlId="validationCustom05">
        <Form.Label>Phone Number * Optional SMS alerts</Form.Label>
          <Form.Control type="num"
          placeholder="Phone Number"
          name="phone_number"
          value={phone_number.value}
          onChange={this.onChange}
          //validation = {null}
          />
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

          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
    </Container>
      </div>
    );
  }
}

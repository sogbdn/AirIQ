import React, { Component } from 'react';
// https://unpkg.com/react-bootstrap@1.0.0-beta.5/Form.js
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup'
import Container from 'react-bootstrap/Container'
import axios from 'axios';
import { Redirect} from 'react-router-dom'

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
        value: false,
        validation: null
      },
      bad_days: {
        value: false,
        validation: null
      },
      password: {
        value: '',
        validation: null
      },
      password_conf: {
        value: '',
        validation: null
      },
      redirect: false
      //validated: false  ///set validation in the state
    };
  }

  onInput = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    console.log(value);
    this.setState({
      [name]: value
    })
  }

  onChange = (e) => {
    let validation;
    if (e.target.name === "phone_number") {
      var validentries1 = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/; // there is a sneaky space being allowed in the valid characters
      if (e.target.value.match(validentries1)) {
        validation = true
        console.log('true')
      } else {
        validation = false
        console.log('false')
      }
    }
    else if (e.target.name === "first_number") {
      var validentries2 =/[A-Z]/g; // there is a sneaky space being allowed in the valid characters
      if (e.target.value.match(validentries2)&& e.target.value.length <= 15) {
        validation = true
      } else {
        validation = false
      }
    }
    // else if (e.target.name === "last_number") {
    //   var validentries3 =/[A-Z]/g; // there is a sneaky space being allowed in the valid characters
    //   if (e.target.value.match(validentries3)&& (e.target.value.length <= 15 && e.target.value.length >2)) {
    //     validation = true
    //   } else {
    //     validation = false
    //   }
    // }

    // else if (e.target.name === "email") {
    //   var validentries =/[A-Z]/g; // there is a sneaky space being allowed in the valid characters
    //   if (e.target.value.match(validentries)&& (e.target.value.length <= 15 && e.target.value.length >2)) {
    //     validation = true
    //   } else {
    //     validation = false
    //   }
    // }
    this.setState({ [e.target.name]: {value: e.target.value, validation}});
  }

  uniqueEmail = (email) =>{
    return(axios.post('http://localhost:3001/checkEmail', { email: email})
      .then((result) => {
        return result.data.uniqueness;
      }))
  }

  passwordMatch = (pass, pass_conf) => {
    if (pass === pass_conf) {
      return true;
    } else {
      return false;
    }
  }

  redirection = () => {
    this.setState({
      redirect: true
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const that = this;
    let emailCheck = this.uniqueEmail(this.state.email.value);
    let passMatch = this.passwordMatch(this.state.password.value, this.state.password_conf.value);
    const { first_name, last_name, email, phone_number, concern_type, good_days, bad_days, password, password_conf } = this.state;
    emailCheck.then(function(value){
      if(value && passMatch){
        let good = "";
        let bad = "";
        if (good_days) {
            good = "yes"
        } else {
            good = "no"
        }
        if (bad_days) {
            bad = "yes"
        } else {
            bad = "no"
        }

        axios.post('http://localhost:3001/register', {first_name: first_name.value, last_name: last_name.value, email: email.value, phone_number: phone_number.value, concern_type: concern_type.value, good_days: good, bad_days: bad, password: password.value })
          .then((result) => {

            localStorage.setItem('token', result.data.token)
            //access the results here....
            that.redirection()
            console.log('server responded', result)
        });
      } else if (value) {
        alert("Passwords do not match");

      }
      else if (passMatch) {
        alert("Email");
      } else {
        alert("Multiple form errors")
      }
    }
    )
  }

  validationClass = (isValid) => {
    if(isValid == null) {
      return  "";
    }
    else if (isValid){
      return "valid"
    }
    else {
      return "invalid"
    }

  }

  componentDidMount() {
    console.log("Register Mounted");
  }
  render() {

    const {redirect, first_name, last_name, email, phone_number, concern_type, password, password_conf, good_days, bad_days} = this.state;
    if (redirect) {
      return (
        <Redirect to='/'/>
      );
    } else {

      return (
        <Container>
          <Form
          // noValidate
          // validated={'validated'}
            onSubmit={e => this.handleSubmit(e)}
          >
            <Form.Row>
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label></Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="first_name"
                  value={first_name.value}
                  onChange={this.onChange}
                  placeholder="First name"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label></Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="last_name"
                  value={last_name.value}
                  onChange={this.onChange}
                  placeholder="Last Name"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="4" controlId="validationCustomEmail">
                <Form.Label></Form.Label>
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
              <Form.Group as={Col} md="4" controlId="validationCustom03">
                <Form.Label>Health Concern Tier*</Form.Label>
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

              <Form.Group as={Col} md="4" controlId="validationCustom05">
                <Form.Label>Phone Number*</Form.Label>
                <Form.Control type="num"
                  placeholder="Phone Number"
                  name="phone_number"
                  value={phone_number.value}
                  onChange={this.onChange}
                  className={this.validationClass(phone_number.validation)}
                />
                  { phone_number.validation ?
                    <div key={`inline-checkbox`} className="mb-1">
                      <Form.Check inline label="Best AirQ days"
                        name="good_days"
                        type='checkbox'
                        id={`inline-checkbox-1 inline-checkbox-2`}
                        value={this.state.good_days}
                        onChange={this.onInput}
                      />
                      <Form.Check inline label="Poor AirQ days"
                        name="bad_days"
                        type='checkbox'
                        id={`inline-checkbox-2`}
                        value={this.state.bad_days}
                        onChange={this.onInput}
                      />
                    </div> : null
                }
              </Form.Group>

              <Form.Group as={Col} md="3" controlId="validationCustom04">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required
                  name="password"
                  value={password.value}
                  onChange={this.onChange}
                />
              </Form.Group>

              <Form.Group as={Col} md="3" controlId="validationCustom06">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control type="password" placeholder="Password" required
                  name="password_conf"
                  value={password_conf.value}
                  onChange={this.onChange}
                />
              </Form.Group>
            </Form.Row>
            <Button type="submit">Submit form</Button>
          </Form>
        </Container>
      );
    };
  }
}

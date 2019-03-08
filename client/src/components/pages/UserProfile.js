import React, { Component } from "react";
import axios from 'axios';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

//page not actually defined yet
export default class UserProfile extends Component {

  constructor() {
    super();
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      phone_number: '',
      concern_type: '',
      bad_days: '',
      good_days: ''
    }
  }

  componentDidMount() {
    const currentUser = localStorage.getItem('token');
    axios
    .get(`http://localhost:3001/verifyUser?currentUser=${currentUser}`)
    .then((res) => {
      let decodedUser = res.data;
      this.setState( {
        first_name: decodedUser.first_name,
        last_name: decodedUser.last_name,
        email: decodedUser.email,
        phone_number: decodedUser.phone_number,
        concern_type: decodedUser.profile_type,
        bad_days: decodedUser.sms_bad_days,
        good_days: decodedUser.sms_good_days
      })
    });
    console.log("UserProfile Mounted");

  }
  onChange = (e) => {
    this.setState({
      phone_number: e.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const first_name = this.state.first_name;
    const last_name = this.state.last_name;
    const email = this.state.email;
    const phone_number = this.state.phone_number;
    axios.post('/changeNumber', { first_name: first_name, last_name: last_name, email: email, phone_number:phone_number })
      .then((result) => {
        localStorage.setItem('token', result.data.token);
        console.log('server responded', result)
      });
  };

  render() {
    const currentUser = localStorage.getItem('token');
    if (currentUser) {
      return (
        <div>
          <div>
            {this.state.first_name}
          </div>
          <div>
            {this.state.last_name}
          </div>
          <div>
            {this.state.email}
          </div>
          <Form onSubmit={e => this.handleSubmit(e)}>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="num"
                placeholder="Phone Number"
                name="phone_number"
                value={this.state.phone_number}
                onChange={this.onChange}
              />
            </Form.Group>
            <Button type="submit">Change Phone Number</Button>
          </Form>
          <div>
            {this.state.good_days}
          </div>
          <div>
            {this.state.bad_days}
          </div>
          <div>
            {this.state.concern_type}
          </div>
        </div>

      )
    } else {
      return (
        <div>
          You are not logged in
        </div>
      )
    }
  }
}

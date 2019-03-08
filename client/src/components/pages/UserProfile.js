import React, { Component } from "react";
import Container from 'react-bootstrap/Container'
import axios from 'axios';

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
          <div>
            {this.state.phone_number}
          </div>
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

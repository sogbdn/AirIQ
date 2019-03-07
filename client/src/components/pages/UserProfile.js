import React, { Component } from "react";
import Container from 'react-bootstrap/Container'

var jwt = require('jsonwebtoken');
//page not actually defined yet
export default class UserProfile extends Component {

  constructor() {
    super();
    const currentUser = localStorage.getItem('token');
    if (currentUser) {
      const decodedUser = jwt.verify(currentUser, 'blablabla');
      this.state = {
        first_name: decodedUser.first_name,
        last_name: decodedUser.last_name,
        email: decodedUser.email,
        phone_number: decodedUser.phone_number,
        concern_type: decodedUser.profile_type,
        bad_days: decodedUser.sms_bad_days,
        good_days: decodedUser.sms_good_days
      }
    } else {
      this.state = {
        first_name: null,
        last_name: null,
        email: null,
        phone_number: null,
        concern_type: null,
        bad_days: null,
        good_days: null
      }
    }
  }

  componentDidMount() {
    console.log("UserProfile Mounted");
  }

  render() {
    const currentUser = localStorage.getItem('token');

    const {first_name, last_name, email, phone_number, good_days, bad_days, concern_type} = this.state;
    if (currentUser) {
      return (
        <div>
          <div>
            {first_name}
          </div>
          <div>
            {last_name}
          </div>
          <div>
            {email}
          </div>
          <div>
            {phone_number}
          </div>
          <div>
            {good_days}
          </div>
          <div>
            {bad_days}
          </div>
          <div>
            {concern_type}
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

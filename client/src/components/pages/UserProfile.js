import React, { Component } from "react";
import Container from 'react-bootstrap/Container'

//page not actually defined yet
export default class UserProfile extends Component {
  componentDidMount() {
    console.log("UserProfile Mounted");
  }
  render() {

    var users = [
      {
        id: 1,
        first_name: "Laura",
        last_name: "Palmer",
        email: "laura.palmer@gmail.com",
        password: "blackjack",
        password_confirmation: "blackjack",
        profile_type: 1,
        sms_good_days: false,
        sms_bad_days: true
      },
      {
        id: 2,
        first_name: "Dale",
        last_name: "Cooper",
        email: "coffelover4ever@gmail.com",
        password: "cherrypie",
        password_confirmation: "cherrypie",
        profile_type: 2,
        sms_good_days: true,
        sms_bad_days: false
      }
    ];
    
    for ( var prop in users){

      console.log(users[prop].first_name)
     
    }

    
    return (
    
        <Container>
       something
        </Container>
      
    );
  }
}

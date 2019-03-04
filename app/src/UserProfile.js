
import React, { Component } from 'react';
import './App.css';

// import Card from 'react-bootstrap/Card'
// import Container from 'react-bootstrap/Container';
// import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'
import './App.css';

const staticmessage = [
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

class UserProfile extends Component{

  componentDidMount() {
    console.log("UserProfile Mounted");
  }
  render() {
    const profiles = staticmessage.map(static_message  => {
      //console.log(static_message.profile_type);
      switch(static_message.profile_type) {
        case 1:
          //static_message.profile_type = "general concern"; //this overwrites the 'type' sent by user and sends back a new type for the client to read/parse
          <div>"customized message for general"</div>
          //wss.broadcast(JSON.stringify(static_message));
          //console.log(static_message.recommendation)
          console.log(static_message.profile_type)
        break;
        case 2:
          //static_message.profile_type = "medical concern"; 
          //static_message.key = uuidv4(); //here did nothing to get rid of error
          <div>"customized message for medical"</div>
          //wss.broadcast(JSON.stringify(static_message));
          break;
        default:
          console.log('no known type')
          //static_message.profile_type = "general concern"; // the default is general concern, for all unregistered users. if there is not  value for profile_type, ideally this is what would come up<div>"customize message for unregistered user"</div>
          //console.log(static_message.recommendation)
        break;
      }
    }) 
  return (
    {profiles}
    )
  }
}
export default UserProfile
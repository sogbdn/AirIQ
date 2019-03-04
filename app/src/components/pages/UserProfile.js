import React, { Component } from "react";
//import { browserHistory } from 'react-router';
import NavBar from '../partials/_NavBar' 

export default class UserProfile extends Component {
  componentDidMount() {
    console.log("UserProfile Mounted");
  }
  render() {
    return (
      <div>
      <NavBar></NavBar>
      
        UserProfile placeholder
      </div>
    );
  }
}

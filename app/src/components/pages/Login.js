import React, { Component } from "react";
//import { browserHistory } from 'react-router';
import NavBar from '../partials/_NavBar' 

export default class Login extends Component {
  componentDidMount() {
    console.log("Login Mounted");
  }
  render() {
    return (
      <div>
      <NavBar></NavBar>
        Login placeholder
      </div>
    );
  }
}

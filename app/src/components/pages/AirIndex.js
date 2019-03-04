import React, { Component } from "react";
//import { browserHistory } from 'react-router';
import NavBar from '../partials/_NavBar' 

export default class AirIndex extends Component {
  componentDidMount() {
    console.log("Login Mounted");
  }
  render() {
    return (
      <div>
      <NavBar></NavBar>
        AirIndex placeholder
      </div>
    );
  }
}

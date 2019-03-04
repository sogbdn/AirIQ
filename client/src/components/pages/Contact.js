import React, { Component } from "react";
//import { browserHistory } from 'react-router';
import NavBar from '../partials/_NavBar' 

export default class Contact extends Component {
  componentDidMount() {
    console.log("Contact Mounted");
  }
  render() {
    return (
      <div>
      <NavBar></NavBar>
        Contact placeholder
      </div>
    );
  }
}

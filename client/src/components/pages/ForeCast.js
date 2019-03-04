import React, { Component } from "react";
//import { browserHistory } from 'react-router';
import NavBar from '../partials/_NavBar' 


export default class Forecast extends Component {
  componentDidMount() {
    console.log("Forecast Mounted");
  }
  render() {
    return (
      <div id="home">
      <NavBar></NavBar>
        Forecast Placeholder
      </div>
    );
  }
}



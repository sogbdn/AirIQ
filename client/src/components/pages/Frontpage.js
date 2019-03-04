import React, { Component } from "react";
//import { browserHistory } from 'react-router';
import NavBar from '../partials/_NavBar' 
import AirCard from '../partials/_AirCard'  

export default class FrontPage extends Component {
  componentDidMount() {
    console.log("Frontpage Mounted");
  }
  render() {
    return (
      <div id="home">
      <NavBar></NavBar>
      <AirCard></AirCard>
        This is the frontpage/home page.
      </div>
    );
  }
}



import React, { Component } from "react";
//import { browserHistory } from 'react-router';
import NavBar from '../partials/_NavBar' 

export default class MapView extends Component {
  componentDidMount() {
    console.log("MapView Mounted");
  }
  render() {
    return (
      <div>
      <NavBar></NavBar>
      
        MapView placeholder
      </div>
    );
  }
}

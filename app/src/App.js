import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Register from './Register'

class App extends Component {

  componentDidMount() {
    console.log("Components Mounted!");
  }
  render() {
    return (
      <div className="App">
        <Register></Register>
      </div>
    );
  }
}

export default App;

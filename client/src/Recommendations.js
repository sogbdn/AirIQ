import React, { Component } from 'react';
import AqCard from './AqCard'

import Container from 'react-bootstrap/Container';



class Recommendations extends AqCard{

  componentDidMount() {
    console.log("Recommendations Mounted");
  }
  render() {
    return (
      <Container>
  0 – 50 indicates “Good” AQI. At this level the quality of air is deemed to be satisfactory, and air pollution poses little or no risk.
</Container>
      
    );
  }
}

export default Recommendations;

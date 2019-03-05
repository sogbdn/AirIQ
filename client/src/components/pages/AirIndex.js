import React, { Component } from "react";

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
//import InputGroup from 'react-bootstrap/InputGroup'
import Container from 'react-bootstrap/Container'

//page not actually defined yet
export default class AirIndex extends Component {
  componentDidMount() {
    console.log("Login Mounted");
  }
  render() {
    return (
  <Container>
  <Row>
    <Col><p>Think of the AQI as a yardstick that runs from 0 to 500. The higher the AQI value, the greater the level of air pollution and the greater the health concern. For example, an AQI value of 50 represents good air quality with little potential to affect public health, while an AQI value over 300 represents hazardous air quality.</p></Col>
  </Row>
 </Container>
    );
  }
}

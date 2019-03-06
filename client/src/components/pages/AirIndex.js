import React, { Component } from "react";

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
//import InputGroup from 'react-bootstrap/InputGroup'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'

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

  <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>Air Quality Index Levels of Health Concern</th>
      <th>Good</th>
      <th>Moderate</th>
      <th>Unhealthy for Sensitive Groups</th>
      <th>Unhealthy</th>
      <th>Very Unhealthy</th>
      <th>Hazardous</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Good</td>
      <td>Mark</td>
      <td>Otto</td>
      <td></td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td></td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
 </Container>
    );
  }
}

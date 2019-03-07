import React, { Component } from "react";

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
//import InputGroup from 'react-bootstrap/InputGroup'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import Card from 'react-bootstrap/Card'

//page not actually defined yet
export default class AirIndex extends Component {
  componentDidMount() {
    console.log("Login Mounted");
  }
  render() {
    return (
  <Container>

<Card className="alert1">
  <Card.Body>
  <Row>
    <Col lg={2} md= {3} sm={4} xs={6}><Card.Img variant="top" src="icon_black.png" className ="avatar" bsPrefix/><Card.Subtitle className="mb-2"><b></b></Card.Subtitle></Col>
    <Col lg={10} md= {9} sm={8} xs={6}>
    <Card.Subtitle className="mb-2">Air Quality Index</Card.Subtitle>
    <div className="Aqi_num"><p className="aqinum">0-50</p>
    <p className="aqiheadline">Breath deep and travel far and wide.</p>
    </div>
    </Col>
    </Row>
    <Row>
    <Col sm>
    <Card.Text>
    </Card.Text>
      </Col>
    </Row>
    <Row>
    <Col sm>
    </Col>
    </Row>
  </Card.Body>
</Card>

<Card className="alert2">
  <Card.Body>
  <Row>
    <Col lg={2} md= {3} sm={4} xs={6}><Card.Img variant="top" src="icon_black.png" className ="avatar" bsPrefix/><Card.Subtitle className="mb-2"><b></b></Card.Subtitle></Col>
    <Col lg={10} md= {9} sm={8} xs={6}>
    <Card.Subtitle className="mb-2">Air Quality Index</Card.Subtitle>
    <div className="Aqi_num"><p className="aqinum">51-100</p>
    <p className="aqiheadlinedark">A okay day for shorter excursions, but maybe delay the marathon</p>
    </div>
    </Col>
    </Row>
  </Card.Body>
</Card>

<Card className="alert3">
  <Card.Body>
  <Row>
    <Col lg={2} md= {3} sm={4} xs={6}><Card.Img variant="top" src="icon_black.png" className ="avatar" bsPrefix/><Card.Subtitle className="mb-2"><b></b></Card.Subtitle></Col>
    <Col lg={10} md= {9} sm={8} xs={6}>
    <Card.Subtitle className="mb-2">Air Quality Index</Card.Subtitle>
    <div className="Aqi_num"><p className="aqinum">51-100</p>
    <p className="aqiheadlinedark">Hmmm, might be a good day for indoor activities. It's a tough day outside, for the lungs and heart.</p>
    </div>
    </Col>
    </Row>
  </Card.Body>
</Card>

<Card className="alert4">
  <Card.Body>
  <Row>
    <Col lg={2} md= {3} sm={4} xs={6}><Card.Img variant="top" src="icon_white.png" className ="avatar" bsPrefix/><Card.Subtitle className="mb-2"><b></b></Card.Subtitle></Col>
    <Col lg={10} md= {9} sm={8} xs={6}>
    <Card.Subtitle className="mb-2">Air Quality Index</Card.Subtitle>
    <div className="Aqi_num"><p className="aqinum">51-100</p>
    <p className="aqiheadlinedark">Take it easy and take shelter. Limit outdoor time or heavy exersions where possible</p>
    </div>
    </Col>
    </Row>
  </Card.Body>
</Card>

<Card className="alert4">
  <Card.Body>
  <Row>
    <Col lg={2} md= {3} sm={4} xs={6}><Card.Img variant="top" src="icon_white.png" className ="avatar" bsPrefix/><Card.Subtitle className="mb-2"><b></b></Card.Subtitle></Col>
    <Col lg={10} md= {9} sm={8} xs={6}>
    <Card.Subtitle className="mb-2">Air Quality Index</Card.Subtitle>
    <div className="Aqi_num"><p className="aqinum">51-100</p>
    <p className="aqiheadlinedark">Take it easy and take shelter. Limit outdoor time or heavy exersions where possible</p>
    </div>
    </Col>
    </Row>
  </Card.Body>
</Card>




  <Row>
    <Col><p>Think of the AQI as a yardstick that runs from 0 to 500. The higher the AQI value, the greater the level of air pollution and the greater the health concern. For example, an AQI value of 50 represents good air quality with little potential to affect public health, while an AQI value over 300 represents hazardous air quality.</p></Col>
  </Row>

  <Table bordered hover size="sm">
  <thead>
    <tr>
      <th >Air Quality Guide</th>
      <th>Good (0 - 50)</th>
      <th>Moderate (51- 100)</th>
      <th>Unhealthy for Sensitive Groups (101 - 150)</th>
      <th>Unhealthy (151 - 200)</th>
      <th>Very Unhealthy (200 - 300)</th>
      <th>Hazardous (301 - 500)</th>
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

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


export default class AirCard extends Component {

  componentDidMount() {
    console.log("AirCard Mounted");
  }

  render() {
    return (
          <Container>
            <Card bg="alert1" className="cardcustom">
              <Card.Body>
                <Row>
                  <Col sm={4}><Card.Img variant="top" src="lungs.png" className ="avatar" bsPrefix/><Card.Subtitle className="mb-2">Air Quality: Good</Card.Subtitle></Col>
                  <Col sm={8}>
                    <Card.Subtitle className="mb-2">Air Quality Index</Card.Subtitle>
                    <div className="Aqi_num"><p className="aqinum">28</p>~~</div>
                  </Col>
                </Row>
                <Row>
                  <Col sm>
                    <Card.Text/>
                  </Col>
                </Row>
                <Row>
                  <Col sm>
                    <Link to={'/airQuality'}>About AQI Air Index</Link>
                    <Link to={'/concerns'}>Health Recommendations by Concern</Link>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Container>

    );
  }
}

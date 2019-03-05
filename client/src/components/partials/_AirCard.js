import React, { Component } from 'react';

import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'




export default class AirCard extends Component {

  componentDidMount() {
    console.log("AirCard Mounted");
  }

 

  qualityColor(airquality){
    if (airquality < 50){
      return "alert1"
    }
  }
//separate file create and object with and object
  //export const airstrings = {"AQ1": "something"}
  //airSTrings and try to access the object    AQ + props

  airstr



  render() {



    return (
      <Container>
      <Card bg={this.qualityColor(this.props.airQuality)} className="cardcustom">
        <Card.Body>
        <Row>
          <Col lg={2} md= {3} sm={4} xs={6}><Card.Img variant="top" src="icon_black.png" className ="avatar" bsPrefix/><Card.Subtitle className="mb-2">Air Quality: Good</Card.Subtitle></Col>
          <Col lg={10} md= {9} sm={8} xs={6}>
          <Card.Subtitle className="mb-2">Air Quality Index</Card.Subtitle>
          <div className="Aqi_num"><p className="aqinum">{this.props.airQuality + 4}</p>asdifjoasidjf oijoafidsj ojasdf oiajsdofjio oasdfiojioasd jfoijadosifj oadsjfoij oiasdofjoi asdfoj oasdfojasdo ifjoiasdjf oisajdofj jioa </div>
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
          <Card.Link href="#">About AQI Air Index</Card.Link>
          <Card.Link href="#">Health Recommendations by Concern</Card.Link>
          </Col>
        </Row>
      </Card.Body>
    </Card>
    
    </Container>

    );
  }
}

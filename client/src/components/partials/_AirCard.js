import React, { Component } from 'react';

import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import AirRatingRecom  from './_AirRatingRecom'
import Image from 'react-bootstrap/Image'


///

export default class AirCard extends Component {

  componentDidMount() {
    console.log("AirCard Mounted");
  }

  qualityColor(airquality){
    if (airquality < 50){
      return "alert1"
    }
    else if (airquality > 50 && airquality < 100){
      return "alert2"
    }
    else if (airquality < 150 && airquality > 100){
      return "alert3"
    }
    else if (airquality > 150 && airquality < 200){
      return "alert4"
    }
    else if (airquality > 200 && airquality <300){
      return "alert5"
    }
    else {
      return "unavailable"
    }
  }
//separate file create and object with and object
  //export const airstrings = {"AQ1": "something"}
  //airSTrings and try to access the object    AQ + props




  render() {



    return (
      <div>
      <Container>
      <Card bg={this.qualityColor(this.props.airQuality)} className="cardcustom">
        <Card.Body>
        <Row>
          <Col lg={2} md= {3} sm={4} xs={6}><Card.Img variant="top" src="icon_black.png" className ="avatar" bsPrefix/></Col>
          <Col lg={10} md= {9} sm={8} xs={6}>
          <Card.Subtitle className="mb-2"><Card.Link href="/airQuality">Air Quality Index:  {this.props.airQuality} </Card.Link>- for Montreal, QC - March 7, 2017</Card.Subtitle>
          <div className="Aqi_num">
          <p className="aqiheadline"><AirRatingRecom airRating = {this.qualityColor(this.props.airQuality)}/></p>
          </div>
          <div align="right">
    <div className="cardicons" align="right"><Image src="forest.svg"/></div>
    </div>
    </Col>
  </Row>
  </Card.Body>
</Card>
</Container>
<Container>
  <Card>
    <Card.Body>
    <Row>
    <Col sm>
    <Card.Link href="#">Health Recommendations by Concern</Card.Link>
    </Col>
    </Row>
    </Card.Body>
  </Card>
</Container>
<Container>
</Container>
</div>

    );
  }
}

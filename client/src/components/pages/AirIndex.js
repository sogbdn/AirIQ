import React, { Component } from "react";

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
//import InputGroup from 'react-bootstrap/InputGroup'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'

//page not actually defined yet
export default class AirIndex extends Component {
  componentDidMount() {
    console.log("Login Mounted");
  }
  render() {
    return (
<Container>
<Card className="introcard" className="mx-auto">
  <Card.Body>
  <Row>
    <Col>
    <p className="white">Think of the AQI as a yardstick that runs from 0 to 500. The higher the AQI value, the greater the level of air pollution and the greater the health concern. For example, an AQI value of 50 represents good air quality with little potential to affect public health, while an AQI value over 300 represents hazardous air quality.</p>
    <div align="right">
    <div className="cardicons"><Image src="kite.svg" className="kite"/></div>
    </div>
    </Col>
    </Row>
  </Card.Body>
</Card>

<Card className="alert1">
  <Card.Body>
  <Row>
    <Col lg={2} md= {3} sm={4} xs={6}><Card.Img variant="top" src="icon_black.png" className ="avatar" bsPrefix/><Card.Subtitle className="mb-2"><b></b></Card.Subtitle></Col>
    <Col lg={10} md= {9} sm={8} xs={6}>
    <Card.Subtitle className="mb-2">Air Quality Index: 0-50</Card.Subtitle>
    <div className="Aqi_num"><p className="aqiheadline">Breath deep and travel far and wide.</p></div>
    <div align="right">
    <div className="cardicons" align="right"><Image src="forest.svg"/></div>
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
    <Card.Subtitle className="mb-2">Air Quality Index: 51-100</Card.Subtitle>
    <div className="Aqi_num">
    <p className="aqiheadlinedark">An okay day for short excursions, but maybe delay the marathon</p> </div>
    <div align="right">
    <div className="cardicons" align="right"><Image src="bench.svg"/></div>
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
    <Card.Subtitle className="mb-2">Air Quality Index: 101-150</Card.Subtitle>
    <div className="Aqi_num">
    <p className="aqiheadlinedark">...Might be a good day for indoor activities. It's a tough day outside, for the lungs and heart.</p>
    </div>
    <div align="right">
    <div className="cardicons" align="right"><Image src="bonsai.svg"/></div>
    </div>
    </Col>
    </Row>
  </Card.Body>
</Card>

<Card className="alert4">
  <Card.Body>
  <Row>
    <Col lg={2} md= {3} sm={4} xs={6}><Card.Img variant="top" src="icon_white.png" className ="avatar" bsPrefix/></Col>
    <Col lg={10} md= {9} sm={8} xs={6}>
    <Card.Subtitle className="mb-2">Air Quality Index: 151-200</Card.Subtitle>
    <div className="Aqi_num">
    <p className="aqiheadlinedark">Take it easy and take shelter. Limit outdoor time or heavy exersions, where possible</p>
    </div>
    <div align="right">
    <div className="cardicons" align="right"><Image src="whistle.svg"/></div>
    </div>
    </Col>
    </Row>
  </Card.Body>
</Card>

<Card className="alert5">
  <Card.Body>
  <Row>
    <Col lg={2} md= {3} sm={4} xs={6}><Card.Img variant="top" src="icon_white.png" className ="avatar" bsPrefix/><Card.Subtitle className="mb-2"><b></b></Card.Subtitle></Col>
    <Col lg={10} md= {9} sm={8} xs={6}>
    <Card.Subtitle className="mb-2" className="aqiwhitenum">Air Quality Index: 201-300</Card.Subtitle>
    <div className="Aqi_num">
    <p className="aqiheadline">Hazardous. Serious Serious lung and heart effects present. Take care and stay indoors</p>
    </div>
    <div align="right">
    <div className="cardicons" align="right"><Image src="roadblock.svg"/></div>
    </div>
    </Col>
    </Row>
  </Card.Body>
</Card>


<Card className="alert6">
  <Card.Body>
  <Row>
    <Col lg={2} md= {3} sm={4} xs={6}><Card.Img variant="top" src="icon_white.png" className ="avatar" bsPrefix/><Card.Subtitle className="mb-2"><b></b></Card.Subtitle></Col>
    <Col lg={10} md= {9} sm={8} xs={6}>
    <Card.Subtitle className="mb-2" className="aqiwhitenum">Air Quality Index: 300+</Card.Subtitle>
    <div className="Aqi_num">
    <p className="aqiheadline">Lethal Conditions. Serious lung and heart effects that can effect mortality. Everyone should avoid all outdoor exertions.</p>
    </div>
    <div align="right">
    <div className="cardicons" align="right"><Image src="saviour.svg"/></div>
    </div>
    </Col>
    </Row>
  </Card.Body>
</Card>

 </Container>
    );
  }
}

import React, { Component } from 'react';

// import Card from 'react-bootstrap/Card'
// import Container from 'react-bootstrap/Container';
// import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'
import './App.css';

export default class AirCard extends Component {

  componentDidMount() {
    console.log("AirCard Mounted");
  }
  
  render() {
    return (
      <div>AirIndexCard placeholder</div>
      // <Container>
      //   <Card bg="alert1" className="cardcustom">
      //     <Card.Body>
      //     <Row>
      //       <Col sm={4}><Card.Img variant="top" src="lungs.png" className ="avatar" bsPrefix/><Card.Subtitle className="mb-2">Air Quality: Good</Card.Subtitle></Col>
      //       <Col sm={8}>
      //       <Card.Subtitle className="mb-2">Air Quality Index</Card.Subtitle>
      //       <div className="Aqi_num"><p className="aqinum">28</p>~~</div>
      //       </Col>
      //     </Row>
      //     <Row>
      //       <Col sm>
      //       <Card.Text>
              
      //       </Card.Text>
      //       </Col>
      //     </Row>
      //     <Row>
      //       <Col sm>
      //       <Card.Link href="#">About AQI Air Index</Card.Link>
      //       <Card.Link href="#">Health Recommendations by Concern</Card.Link>
      //       </Col>
      //     </Row>
      //   </Card.Body>
      // </Card>
      // </Container>
    );
  }
}

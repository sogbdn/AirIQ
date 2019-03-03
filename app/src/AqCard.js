import React, { Component } from 'react';


import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


class AqCard extends Component{

  componentDidMount() {
    console.log("AqCard Mounted");
  }
  render() {
    return (
      <Container>
  <Card bg="success">
  <Card.Body>
  <Row>
    <Col sm={4}><Card.Img variant="top" src="lungs.png" bsPrefix/></Col>
    <Col sm={8}>
    <Card.Subtitle className="mb-2">Air Quality: Good</Card.Subtitle><div class="Aqi_num"><h1>28</h1></div>
    </Col></Row>
    <Row><Col sm><Card.Text>
      
   At this level the quality of air is deemed to be satisfactory, and air pollution poses little or no risk. AQI at 0 – 50 indicates “Good” Air Quality. 
    </Card.Text></Col></Row>
    <Row><Col sm>
    <Card.Link href="#">About AQI Air Index</Card.Link>
    <Card.Link href="#">Health Recommendations by Concern</Card.Link></Col></Row>
  </Card.Body>
</Card>
</Container>
      
    );
  }
}

export default AqCard;

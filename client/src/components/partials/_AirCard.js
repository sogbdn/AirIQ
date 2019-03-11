import React, { Component } from 'react';

import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Collapse from 'react-bootstrap/Collapse'
import AirRatingRecom  from './_AirRatingRecom'
import Image from 'react-bootstrap/Image'
//import Tooltip from 'react-bootstrap/Tooltip'
import Geosuggest from 'react-geosuggest';
import Moment from 'react-moment';



///

export default class AirCard extends Component {

  componentDidMount() {
    console.log("AirCard Mounted");
  }

  onSuggestSelect = (suggest) => {
    if(suggest !== undefined){
      this.props.onLocationUpdate(suggest.location)
    }
  }

  qualityColor(airquality){
    if (airquality > 0 && airquality < 50){
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
    else if (airquality > 300){
      return "alert6"
    }
    else if (airquality === 'undefined'){
      return "unavailable"
    }
    else {
      return "unavailable"
    }
  }


  qualityIcon(airquality){
    if (airquality >= 0 && airquality < 50){
      return "forest.svg"
    }
    else if (airquality >= 50 && airquality < 100){
      return "bench.svg"
    }
    else if (airquality < 150 && airquality >= 100){
      return "bonsai.svg"
    }
    else if (airquality >= 150 && airquality < 200){
      return "whistle.svg"
    }
    else if (airquality >= 200 && airquality <300){
      return "roadblock.svg"
    }
    else if (airquality >= 300){
      return "saviour.svg"
    }
    else if (airquality === 'undefined'){
      return ""
    }
    else {
      return ""
    }
  }


  qualitytext(airquality){
    if (airquality > 50 && airquality < 200){
      return "aqiheadlinedark"
    }
    else {
      return "aqiheadline"
    }
  }

  qualityiconcolor(airquality){
    if (airquality >= 0 && airquality < 150){
      return "icon_black.svg"
    }
    else {
      return "icon_white.svg"
    }
  }

//separate file create and object with and object
  //export const airstrings = {"AQ1": "something"}
  //airSTrings and try to access the object    AQ + props


  // <Col lg={2} md= {3} sm={4} xs={6}><Card.Img variant="top" src={this.qualityiconcolor(this.props.airQuality)} className ="avatar" bsPrefix/></Col>
  // <Col lg={10} md= {9} sm={8} xs={6}>

  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
    };
  }



  render() {
    var today = new Date();
    var fullDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    const { open } = this.state;


    return (
      <div >
      <Container class="mx-auto">
        
      <Card bg={this.qualityColor(this.props.airQuality)} className="cardcustom">
        <Card.Body>
          <Row><div className="Aqicontainer">
            <p className={this.qualitytext(this.props.airQuality)}><AirRatingRecom airRating = {this.qualityColor(this.props.airQuality)}/></p><div className = "gradient"></div>
            </div>
          </Row>
          <Row><Col lg={2} md= {3} sm={4} xs={6}>
          <Card.Img variant="top" src={this.qualityiconcolor(this.props.airQuality)} className ="avatar" bsPrefix/>
          </Col>
          <Col lg={10} md= {9} sm={8} xs={6}>
             <p>Air Quality for {this.props.city} - <Moment format="MMMM Do YYYY">{fullDate}</Moment></p>
            <Col md={6}><p className="aqinum">{this.props.airQuality} </p>
            </Col>
            <Col md={6}>
              <div className="cardicons"><Image name='cardicon' src={this.qualityIcon(this.props.airQuality)}/>
              </div>
            </Col>
          </Col>
        </Row>
      </Card.Body>
  
</Card>
</Container>
<Container>
  <Card class="submitlocation">
    <Card.Body>
    <Row>
    <Geosuggest placeholder="Check Another Location's Air Quality" onSuggestSelect={this.onSuggestSelect}/>
    </Row>


    </Card.Body>
  </Card>
  
  <Card>
    <Card.Body>
    <Row>
    <Col sm>
      <div className="rainbow"  onClick={() => this.setState({ open: !open })}
    aria-expanded={open}>
      <div className="rainbowgreen"><p>0 - 50</p></div>
      <div className="rainbowyellow"></div>
      <div className="rainboworange"></div>
      <div className="rainbowred"></div>
      <div className="rainbowmaroon"></div>
      <div className="rainbow"></div>
      <p><Image src="plus.svg" /></p>
    </div>
        <Collapse in={this.state.open}>
          
          <div id="introcard" background-color="blue">
          <p className="white">Think of the AQI as a yardstick that runs from 0 to 500. The higher the AQI value, the greater the level of air pollution and the greater the health concern. For example, an AQI value of 50 represents good air quality with little potential to affect public health, while an AQI value over 300 represents hazardous air quality.</p>
          
    <div align="right">
    <div className="cardicons"><Image src="kite.svg" className="kite"/></div>
    
    </div>

          The Air Quality Index (AQI) is used for reporting daily air quality. It tells you how clean or polluted your air is, and what associated health effects might be a concern for you. The AQI focuses on health effects you may experience within a few hours or days after breathing polluted air. EPA calculates the AQI for five major air pollutants regulated by the Clean Air Act: ground-level ozone, particle pollution (also known as particulate matter), carbon monoxide, sulfur dioxide, and nitrogen dioxide. For each of these pollutants, EPA has established national air quality standards to protect public health .Ground-level ozone and airborne particles are the two pollutants that pose the greatest threat to human health in this country.
          </div>
        </Collapse></Col></Row>
    </Card.Body>
  </Card>
</Container>
<Container>
</Container>
</div>

    );
  }
}



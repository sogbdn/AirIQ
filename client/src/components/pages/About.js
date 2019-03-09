import React, { Component } from "react";

import Card from 'react-bootstrap/Card'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

//page not actually defined yet
export default class About extends Component {
  componentDidMount() {
    console.log("About Mounted");
  }
  render() {
    return (
<div>
      <Card>
    <Card.Body>
    <Row>
    <Col sm>
    <li>Quick and Visually Digestible info on Air Quality
    </li>
    <li>Tailored Recommendations based on health concern, in relation to air quality
    </li>
    <li>Map View of Surrounding Air Quality Indexed, based on Geolocation
    </li>
    <li>optional SMS alerts, for when Air Quality is paticularly bad, OR and SMS suggesting this is a great day for an adventure, on days the air quality is very good
    </li>


    </Col>
    </Row>
    </Card.Body>
  </Card>

      Further information :  <p>The Air Quality Index (AQI) is used for reporting daily air quality. It tells you how clean or polluted your air is, and what associated health effects might be a concern for you. The AQI focuses on health effects you may experience within a few hours or days after breathing polluted air. EPA calculates the AQI for five major air pollutants regulated by the Clean Air Act: ground-level ozone, particle pollution (also known as particulate matter), carbon monoxide, sulfur dioxide, and nitrogen dioxide. For each of these pollutants, EPA has established national air quality standards to protect public health .Ground-level ozone and airborne particles are the two pollutants that pose the greatest threat to human health in this country.</p>


      </div>
    );
  }
}

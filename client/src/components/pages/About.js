import React, { Component } from "react";

//page not actually defined yet
export default class About extends Component {
  componentDidMount() {
    console.log("About Mounted");
  }
  render() {
    return (
      <div>
        <p>The Air Quality Index (AQI) is used for reporting daily air quality. It tells you how clean or polluted your air is, and what associated health effects might be a concern for you. The AQI focuses on health effects you may experience within a few hours or days after breathing polluted air. EPA calculates the AQI for five major air pollutants regulated by the Clean Air Act: ground-level ozone, particle pollution (also known as particulate matter), carbon monoxide, sulfur dioxide, and nitrogen dioxide. For each of these pollutants, EPA has established national air quality standards to protect public health .Ground-level ozone and airborne particles are the two pollutants that pose the greatest threat to human health in this country.</p>

Air Quality Index:

What the Categories Mean
A Guide to Air Quality and Your Health
AQI Calculator
Ozone Facts
      </div>
    );
  }
}

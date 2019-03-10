import React, { Component } from 'react';
import axios from 'axios';

export default class AirCard extends Component {
// const currentUser = localStorage.getItem('token');
//     if (currentUser) {

  constructor() {
    super();
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      phone_number: '',
      concern_type: '',
      bad_days: '',
      good_days: ''
    }
  }

  componentDidMount() {
    const currentUser = localStorage.getItem('token');
    if (currentUser !== null){
    axios
    .get(`http://localhost:3001/verifyUser?currentUser=${currentUser}`)
    .then((res) => {
      let decodedUser = res.data;
      console.log(decodedUser.profile_type);
      console.log('----------->>>>')
      this.setState({
        first_name: decodedUser.first_name,
        last_name: decodedUser.last_name,
        email: decodedUser.email,
        phone_number: decodedUser.phone_number,
        concern_type: decodedUser.profile_type,
        bad_days: decodedUser.sms_bad_days,
        good_days: decodedUser.sms_good_days
      })
    });
    console.log(this.state);
  }
    
  }
  airRatingStrings = {
    AQI1 : "Breath deep and travel far and wide.",
    AQI2 : "An okay day for short excursions, but maybe delay the marathon",
    AQI3: "...Might be a good day for indoor activities. It's a tough day outside, for the lungs and heart.",
    AQI4: "Take it easy and take shelter. Limit outdoor time or heavy exersions, where possible",
    AQI5: "Significant health risks. Avoid prolonged exposure outside",
    AQI6: "Hazardous. Serious lung and heart aggravation. Everyone should avoid all outdoor exertion",
    AQI_null: "Service tower unavailable for this area"
  }
  extractrating(rating){
    if (rating === "alert1"){
      return this.airRatingStrings.AQI1
    }
    else if (rating === "alert2"){
      return this.airRatingStrings.AQI2
    }
    else if (rating === "alert3"){
      return this.airRatingStrings.AQI3
    }
    else if (rating === "alert4"){
      return this.airRatingStrings.AQI4
    }
    else if (rating === "alert5"){
      return this.airRatingStrings.AQI5
    }
    else if (rating === "unavailable"){
      return this.airRatingStrings.AQI_null
    }
  }

//separate file create and object with and object
  //export const airstrings = {"AQ1": "something"}
  //airSTrings and try to access the object    AQ + props

  render() {

    // const currentUser = localStorage.getItem('token');
    // if (currentUser) {
    return (
    <>
      {this.extractrating(this.props.airRating)}
    </>

    );
  }
}

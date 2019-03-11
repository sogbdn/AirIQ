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
      console.log(this.state);
      });
    }     
  }
  airRatingStrings = {
    AQI1 : "Breath deep and travel far and wide. Air quality is excellent",
    AQI2 : "Air quality is not ideal, but no need to modify outdoor activities. Sensitive individuals should take it easy if they experience symptoms",
    AQI3: "Mid-range pollutants present. A good day for indoor activities and limiting outdoor exposure",
    AQI4: "Take it easy and take shelter. Limit outdoor time or heavy exertions,in favor of indoor playtime",
    AQI5: "Significant health risks. Avoid prolonged exposure outside and reschedule if you are experiencing symptoms such as coughing and throat irritation",
    AQI6: "Hazardous. Serious pollutant levels that will aggravate lung and heart. Reduce or reschedule activities, especially if you are experiencing symptoms. Everyone should avoid all outdoor exertion",
    AQI_null: "Rating unavailable",
    AQI1_medical: "Breath deep and enjoy. A great day for outdoor adventure and stretching out the body",
    AQI2_medical: "Acceptable air quality but sensitive individuals should observe symptoms such as coughing and throat irritation, and adjust activities as needed.",
    AQI3_medical: "Exercise moderation and observe symptoms. Children or elderly should take it easy.",
    AQI4_medical: "Serious pollutant levels present. Limit outdoor activities or wear a filtration mask to limit exposure",
    AQI5_medical: "Significant health risks. Avoid prolonged exposure outside and reschedule if you are experiencing symptoms such as coughing and throat irritation",
    AQI1_lifestyle: "Breath deep and plan for adventure. The air is primed for all excercise activities",
    AQI2_lifestyle: "Some pollutants may aggravate, but otherwise Oxygen and Potassium are 'OK'. Observe any symptoms and adjust exersions if needed",
    AQI3_lifestyle: "Mid range to heavier pollutants present. Air on the side of caution and reschedule any marathons or strenuous activities.",
    AQI4_lifestyle: "Serious Pollution levels present. Limit exposure where and heavy exersions to protect heart and lungs",
    AQI5_lifestyle: "Serious Health Risk with threat of morbidity. Limit all outdoor exposure and use a filtration mask if available. Seek medical attention if symptoms worsen",
  }

  cardResponse(rating){
  const currentUser = localStorage.getItem('token');
    if (currentUser !== null){
      if (rating === "alert1"){
        if(this.state.concern_type === "medical"){
        return this.airRatingStrings.AQI1_medical
        }
        else if(this.state.concern_type === "life_style"){

          return this.airRatingStrings.AQI1_lifestyle
        }
      }
      else if (rating === "alert2"){
        if(this.state.concern_type === "medical"){
          return this.airRatingStrings.AQI2_medical
          }
          else if(this.state.concern_type === "life_style"){
            return this.airRatingStrings.AQI2_lifestyle
          }
      }
      else if (rating === "alert3"){
        if(this.state.concern_type === "medical"){
          return this.airRatingStrings.AQI3_medical
          }
          else if(this.state.concern_type === "life_style"){
            return this.airRatingStrings.AQI3_lifestyle
          }
      }
      else if (rating === "alert4"){
        if(this.state.concern_type === "medical"){
          return this.airRatingStrings.AQI4_medical
          }
          else if(this.state.concern_type === "life_style"){
            return this.airRatingStrings.AQI4_lifestyle
          }
      }
      else if (rating === "alert5"){
        if(this.state.concern_type === "medical"){
          return this.airRatingStrings.AQI5_medical
          }
          else if(this.state.concern_type === "life_style"){
            return this.airRatingStrings.AQI5_lifestyle
          }
      }
      else if (rating === "alert6"){
        if(this.state.concern_type === "medical"){
          return this.airRatingStrings.AQI6
          }
          else if(this.state.concern_type === "life_style"){
            return this.airRatingStrings.AQI6
          }
      }
    } else if (currentUser === null || this.state.concern_type === "general"){
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
  }
  render() {
    return (
    <>
      {this.cardResponse(this.props.airRating)}
    </>
    );
  }
}

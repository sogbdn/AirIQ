import React, { Component } from 'react';

export default class AirCard extends Component {
  componentDidMount() {
    console.log("AirCard Mounted");
  }
  airRatingStrings = {
    AQI1 : "first recommendation",
    AQI2 : "second recom",
    AQI3: "third recommendation",
    AQI4: "fourth recommendation",
    AQI5: "fifth recommendation",
    AQI_null: "no rating available"
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
    return (
    <div>
        {this.extractrating(this.props.airRating)}
    </div>

    );
  }
}

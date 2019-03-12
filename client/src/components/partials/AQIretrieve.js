import React, { Component } from 'react';
import axios from 'axios';

import AirCard from './_AirCard';
//import {MapView} from '../pages/MapView';

export default class AQIretrieve extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		city: 'Montreal' 
	// 	};
	// }


	componentDidMount() {
	
	}

	onLocationUpdate = (location) => {
		const city = document.querySelector('.geosuggest__input').value
		console.log('set: ', city)
		this.props.updateLatAndLng(location.lat, location.lng, city)
		///this.props.updateCity(city)
		
		
		this.props.updatestateAQI(location.lat, location.lng)
	}

	render() {			
		const {aqi, city} = this.props; //destructoring
		return (
      <AirCard airQuality={aqi} city={city} onLocationUpdate={this.onLocationUpdate}/>
		);
	}
}

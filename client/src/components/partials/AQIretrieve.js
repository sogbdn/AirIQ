import React, { Component } from 'react';
import axios from 'axios';

import AirCard from './_AirCard';
//import {MapView} from '../pages/MapView';

export default class AQIretrieve extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newAqius: '',
			// lat: props.lat,
			// lng: props.lng
			city: ''
		};
	}

	updateAQIus(lat, lng) {
		console.log( lat, lng)
		axios
			.get(
				`http://localhost:3001/airqualityAPI?lat=${lat}&long=${lng}`
			)
			.then((res) => {
				console.log('AirVisual response', res);

				// temporary error handler for when no_nearest_city
				if (res.data.status === "fail") {
					this.setState({ newAqius: 'undefined' })
					return res.data.data.message
				}
				console.log('aqius', res.data.data.current.pollution.aqius);
				this.setState({ newAqius: res.data.data.current.pollution.aqius });
			});
	}
	componentDidMount() {
		this.updateAQIus(43.716005, -79.393509)
	}

	onLocationUpdate = (location) => {
		const city = document.querySelector('.geosuggest__input').value
		console.log('set: ', city)
		this.props.updateLatAndLng(location.lat, location.lng)
		this.setState({
			// lat: location.lat,
			// lng: location.lng,
			city: city
		})
		this.updateAQIus(location.lat, location.lng)
	}

	render() {
		const { newAqius } = this.state;
		return (

<table>
<tbody>
	<tr>
      <AirCard airQuality={newAqius} city={this.state.city} onLocationUpdate={this.onLocationUpdate}/>
			</tr>
				</tbody>
			</table>
		);
	}
}

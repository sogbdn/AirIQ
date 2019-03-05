import React, { Component } from 'react';
import { geolocated } from 'react-geolocated';
import axios from 'axios';

// import Card from 'react-bootstrap/Card'
// import Container from 'react-bootstrap/Container';
// import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'

class AQIretrieve extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newAqius: ''
		};
	}

	componentDidMount() {
		axios
			.get(
				`https://api.airvisual.com/v2/nearest_city?lat={this.props.coords.latitude}&lon={this.props.coords.longitude}&key=u78aw3FawH3LQxNQx`
			)
			.then((res) => {
				console.log('AirVisual response', res);
				console.log('aqius', res.data.data.current.pollution.aqius);
				this.setState({ newAqius: res.data.data.current.pollution.aqius });
			});
	}

	render() {
		const { newAqius } = this.state;
		if (!this.props.isGeolocationAvailable) {
			return <div> Your browser does not support Geolocation </div>;
		} else if (!this.props.isGeolocationEnabled) {
			return <div> Geolocation is not enabled </div>;
		} else if (this.props.coords) {
			return (
				<table>
					<tbody>
						<tr>
							<td> AQI geolocated: {newAqius} </td>
						</tr>
						<tr>
							<td>latitude</td>
							<td>{this.props.coords.latitude}</td>
						</tr>
						<tr>
							<td>longitude</td>
							<td>{this.props.coords.longitude}</td>
						</tr>
					</tbody>
				</table>
			);
		} else {
			return <div>Getting the location data&hellip; </div>;
		}
	}
}

export default geolocated({
	positionOptions: {
		enableHighAccuracy: false
	},
	userDecisionTimeout: 5000
})(AQIretrieve);

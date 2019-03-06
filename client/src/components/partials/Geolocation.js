import React, { Component } from 'react';
import { geolocated } from 'react-geolocated';
import AQIretrieve from './AQIretrieve';

// import Card from 'react-bootstrap/Card'
// import Container from 'react-bootstrap/Container';
// import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'

class Geolocation extends Component {
	render() {
		if (!this.props.isGeolocationAvailable) {
			return <div> Your browser does not support Geolocation </div>;
		} else if (!this.props.isGeolocationEnabled) {
			return <div> Geolocation is not enabled </div>;
		} else if (this.props.coords) {
			return (
				<table>
					<tbody>
						<tr>
							<td>latitude</td>
							<td>{this.props.coords.latitude}</td>
						</tr>
						<tr>
							<td>longitude</td>
							<td>{this.props.coords.longitude}</td>
						</tr>
						<AQIretrieve lat={this.props.coords.latitude} long={this.props.coords.longitude} />
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
	userDecisionTimeout: 0
})(Geolocation);

import React, { Component } from 'react';
import { geolocated } from 'react-geolocated';
import AQIretrieve from './AQIretrieve';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'

// import Card from 'react-bootstrap/Card'
// import Container from 'react-bootstrap/Container';
// import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'

class Geolocation extends Component {
	render() {
		if (!this.props.isGeolocationAvailable) {
			return <div><Container><Card><Card.Body><Row>Please enable Geolcation to use this App</Row></Card.Body></Card></Container>
		</div>;
		} else if (!this.props.isGeolocationEnabled) {
			return <div><Container><Card ><Card.Body><Row>Geolaction Not Enabled. Please Check your preferences to view Live Data reading for your location.</Row></Card.Body></Card></Container>
			</div>;
		} else if (this.props.coords) {
			return (
				<AQIretrieve updateLatAndLng={this.props.updateLatAndLng} lat={this.props.coords.latitude} lng={this.props.coords.longitude} />
			);
		} else {
			return <div><Container><Card ><Card.Body><Row>Getting Geolaction Data . . .</Row></Card.Body></Card></Container>
			</div>;
		}
	}
}

export default geolocated({
	positionOptions: {
		enableHighAccuracy: false
	},
	userDecisionTimeout: 0
})(Geolocation);

import React, { Component } from 'react';
import axios from 'axios';

// import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
// import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'
import AirCard from './_AirCard';
import MapView from '../pages/MapView';

export default class AQIretrieve extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newAqius: '',
			lat: props.lat,
			lng: props.lng
		};
	}

	updateAQIus() {
		axios
			.get(
				`http://localhost:3001/airqualityAPI?lat=${this.state.lat}&long=${this.state.lng}`
			)
			.then((res) => {
				console.log('AirVisual response', res);
				console.log('aqius', res.data.data.current.pollution.aqius);
				this.setState({ newAqius: res.data.data.current.pollution.aqius });
			});
	}
	componentDidMount() {
		this.updateAQIus()
	}

	onLocationUpdate = (location) => {
		this.setState({
			lat: location.lat, 
			lng: location.lng
		}, this.updateAQIus)
	}

	render() {
		const { newAqius } = this.state;
		return (
			<tbody>
				<tr>
      <AirCard airQuality= {newAqius} onLocationUpdate={this.onLocationUpdate}/>
      {/* <MapView airQuality={newAqius} displaymap= {this.props.displaymap}/> */}
				</tr>
			</tbody>
		)
	}
}

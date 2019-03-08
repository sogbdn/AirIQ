import React, { Component } from 'react';
import axios from 'axios';

import AirCard from './_AirCard';
import MapView from '../pages/MapView';

export default class AQIretrieve extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newAqius: ''
		};
	}

	componentDidMount() {
		axios
			.get(
				`http://localhost:3001/airqualityAPI?lat=${this.props.lat}&lon=${this.props.long}`
			)
			.then((res) => {
				console.log('AirVisual response', res);
				console.log('aqius', res.data.data.current.pollution.aqius);
				this.setState({ newAqius: res.data.data.current.pollution.aqius });
			});
	}

	render() {
		const { newAqius } = this.state;
		return (
			<tbody>
				<tr>
      <AirCard airQuality={newAqius}/>
      <MapView airQuality={newAqius} displaymap= {this.props.displaymap}/>
				</tr>
			</tbody>
		)
	}
}

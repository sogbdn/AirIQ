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
			city: 'Beijing',
			state: 'Beijing',
			country: 'China',
			AQIfromCity: ''
		};
	}

	componentDidMount() {
		axios
			.get(
				`https://api.airvisual.com/v2/city?city=${this.props.city}& state=${this.props.state}& country=${this
					.props.country}& key=u78aw3FawH3LQxNQx`
			)
			.then((res) => {
				console.log('AirVisual response', res);
				console.log('aqius from city', res.data.data.current.pollution.aqius);
				this.setState({ AQIfromCity: res.data.data.current.pollution.aqius });
			});
	}

	render() {
		const { AQIfromCity } = this.state;
		return (
			<tbody>
				<tr>
					<AirCard airQuality={AQIfromCity} />
					<MapView airQuality={AQIfromCity} displaymap={this.props.displaymap} />
				</tr>
			</tbody>
		);
	}
}

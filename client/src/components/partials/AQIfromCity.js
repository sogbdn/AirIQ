import React, { Component } from 'react';
import axios from 'axios';
import AirCard from './_AirCard';
import MapView from '../pages/MapView';

export default class AQIfromCity extends Component {
	constructor(props) {
		super(props);
		this.state = {
			AQIfromCity: ''
		};
	}

	componentDidMount() {
		axios
			.get(
				`https://api.airvisual.com/v2/city?city=${this.state.city}&state=${this.state.states}&country=${this
					.state.country}&key=u78aw3FawH3LQxNQx`
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

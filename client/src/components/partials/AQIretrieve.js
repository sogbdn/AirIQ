import React, { Component } from 'react';
import axios from 'axios';

// import Card from 'react-bootstrap/Card'
// import Container from 'react-bootstrap/Container';
// import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'

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
				`https://api.airvisual.com/v2/nearest_city?lat=${this.props.lat}&lon=${this.props
					.long}&key=u78aw3FawH3LQxNQx`
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
					<td> AQI geolocated </td>
					<td> {newAqius} </td>
				</tr>
			</tbody>
		);
	}
}

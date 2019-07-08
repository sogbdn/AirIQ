import React, { Component } from 'react';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
//import Collapse from 'react-bootstrap/Collapse'
import AirRatingRecom from './_AirRatingRecom';
import Image from 'react-bootstrap/Image';
//import Tooltip from 'react-bootstrap/Tooltip'
import Geosuggest from 'react-geosuggest';
import Moment from 'react-moment';

///

export default class AirCard extends Component {
	componentDidMount() {
		console.log('AirCard Mounted');
	}

	onSuggestSelect = (suggest) => {
		if (suggest !== undefined) {
			this.props.onLocationUpdate(suggest.location);
		}
	};

	qualityColor(airquality) {
		if (airquality >= 0 && airquality < 50) {
			return 'alert1';
		} else if (airquality >= 50 && airquality < 100) {
			return 'alert2';
		} else if (airquality < 150 && airquality >= 100) {
			return 'alert3';
		} else if (airquality >= 150 && airquality < 200) {
			return 'alert4';
		} else if (airquality >= 200 && airquality < 300) {
			return 'alert5';
		} else if (airquality >= 300) {
			return 'alert6';
		} else if (airquality === 'undefined') {
			return 'unavailable';
		} else {
			return 'unavailable';
		}
	}

	qualityIcon(airquality) {
		if (airquality >= 0 && airquality < 50) {
			return 'forest.svg';
		} else if (airquality >= 50 && airquality < 100) {
			return 'bench.svg';
		} else if (airquality < 150 && airquality >= 100) {
			return 'bonsai.svg';
		} else if (airquality >= 150 && airquality < 200) {
			return 'factory4.svg';
		} else if (airquality >= 200 && airquality < 300) {
			return 'factory3.svg';
		} else if (airquality >= 300) {
			return 'factory1.svg';
		} else if (airquality === 'undefined') {
			return '';
		} else {
			return '';
		}
	}

	qualitytext(airquality) {
		if (airquality >= 50 && airquality < 200) {
			return 'aqiheadlinedark';
		} else {
			return 'aqiheadline';
		}
	}

	qualityiconcolor(airquality) {
		if (airquality >= 0 && airquality < 150) {
			return 'icon_black.svg';
		} else {
			return 'icon_white.svg';
		}
	}

	//separate file create and object with and object
	//export const airstrings = {"AQ1": "something"}
	//airSTrings and try to access the object    AQ + props

	// <Col lg={2} md= {3} sm={4} xs={6}><Card.Img variant="top" src={this.qualityiconcolor(this.props.airQuality)} className ="avatar" bsPrefix/></Col>
	// <Col lg={10} md= {9} sm={8} xs={6}>

	constructor(props, context) {
		super(props, context);

		this.state = {
			open: false
		};
	}

	render() {
		var today = new Date();
		var fullDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
		const { open } = this.state;

		return (
			<div>
				<Container>
					<Card bg={this.qualityColor(this.props.airQuality)} className="alert1">
						<Card.Body>
							<Row>
								<div className="Aqicontainer">
									<p className={this.qualitytext(this.props.airQuality)}>
										<AirRatingRecom airRating={this.qualityColor(this.props.airQuality)} />
									</p>
									<hr />
								</div>
							</Row>
							<Row>
								<Col lg={2} md={3} sm={4} xs={6}>
									<Card.Img
										variant="top"
										src={this.qualityiconcolor(this.props.airQuality)}
										className="avatar"
										bsPrefix
									/>
								</Col>
								<Col lg={10} md={9} sm={8} xs={6}>
									<p>
										Air Quality for <b>{this.props.city}</b> -{' '}
										<Moment format="MMMM Do YYYY">{fullDate}</Moment>
									</p>
									<Row>
										<Col xs={7}>
											<p className="aqinum">{this.props.airQuality} </p>
										</Col>
										<Col xs={5}>
											<div className="cardicons">
												<Image name="cardicon" src={this.qualityIcon(this.props.airQuality)} />
											</div>
										</Col>
									</Row>
								</Col>
							</Row>
						</Card.Body>
					</Card>
				</Container>
				<Container>
					<Card className="submitlocation">
						<Row>
							<Geosuggest
								ref={(el) => (this._geoSuggest = el)}
								placeholder="Enter Location to Check Air Quality"
								onSuggestSelect={this.onSuggestSelect}
							/>
							{/* {* Buttons to trigger exposed componen  t functions *} */}
							{/* <button onClick={() => this._geoSuggest.focus()}>Focus</button>
							<button onClick={() => this._geoSuggest.update('New Zealand')}>Update</button>
							<button onClick={() => this._geoSuggest.clear()}>Clear</button>
							<button onClick={() => this._geoSuggest.selectSuggest()}>Search</button> */}
						</Row>
					</Card>
				</Container>
				<Container>
					<Card>
						<Card.Body>
							<Row>
								<Col>
									<div className="gradient" />
								</Col>
							</Row>
							<Row>
								<Col>
									<p>
										The Air Quality Index (AQI) is used for reporting daily air quality. It tells
										you how clean or polluted your air is, and what associated health effects might
										be a concern for you. The AQI focuses on health effects you may experience
										within a few hours or days after breathing polluted air. EPA calculates the AQI
										for five major air pollutants regulated by the Clean Air Act: ground-level
										ozone, particle pollution (also known as particulate matter), carbon monoxide,
										sulfur dioxide, and nitrogen dioxide. For each of these pollutants, EPA has
										established national air quality standards to protect public health
										.Ground-level ozone and airborne particles are the two pollutants that pose the
										greatest threat to human health in this country.
									</p>
								</Col>
							</Row>
						</Card.Body>
					</Card>
				</Container>
			</div>
		);
	}
}

import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
//import InputGroup from 'react-bootstrap/InputGroup'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

//page not actually defined yet
export default class AirIndex extends Component {
	componentDidMount() {
		console.log('Login Mounted');
	}
	render() {
		return (
			<div>
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
										Think of the Air Quality Index as a yardstick that runs from 0 to 500. The
										higher the AQI value, the greater the level of air pollution and the greater the
										health concern. For example, an AQI value of 50 represents good air quality with
										little potential to affect public health, while an AQI value over 300 represents
										hazardous air quality.
									</p>
									<div className="rainbowgreen">
										<p />
									</div>
									<div className="rainbowyellow" />
									<div className="rainboworange" />
									<div className="rainbowred" />
									<div className="rainbowmaroon" />
									<div className="rainbow" />
								</Col>
							</Row>
						</Card.Body>
					</Card>

					<Card className="alert1">
						<Card.Body>
							<Row>
								<Col lg={2} md={3} sm={4} xs={6}>
									<Card.Img variant="top" src="icon_black.png" className="avatar" bsPrefix />
									<Card.Subtitle className="mb-2">
										<b />
									</Card.Subtitle>
								</Col>
								<Col lg={10} md={9} sm={8} xs={6}>
									<Card.Subtitle className="mb-2">Air Quality Index: 0-50</Card.Subtitle>
									<div className="Aqi_num">
										<p className="aqiheadline">
											Breathe deep and travel far and wide. This is a great day for outdoor
											adventure.
										</p>
									</div>
									<div align="right">
										<div className="cardicons" align="right">
											<Image src="forest.svg" />
										</div>
									</div>
								</Col>
							</Row>
							<Row>
								<Col sm>
									<Card.Text />
								</Col>
							</Row>
							<Row>
								<Col sm />
							</Row>
						</Card.Body>
					</Card>

					<Card className="alert2">
						<Card.Body>
							<Row>
								<Col lg={2} md={3} sm={4} xs={6}>
									<Card.Img variant="top" src="icon_black.png" className="avatar" bsPrefix />
									<Card.Subtitle className="mb-2">
										<b />
									</Card.Subtitle>
								</Col>
								<Col lg={10} md={9} sm={8} xs={6}>
									<Card.Subtitle className="mb-2">Air Quality Index: 51-100</Card.Subtitle>
									<div className="Aqi_num">
										<p className="aqiheadlinedark">
											An okay day for short excursions, but maybe delay the marathon.
										</p>{' '}
									</div>
									<div align="right">
										<div className="cardicons" align="right">
											<Image src="bench.svg" />
										</div>
									</div>
								</Col>
							</Row>
						</Card.Body>
					</Card>

					<Card className="alert3">
						<Card.Body>
							<Row>
								<Col lg={2} md={3} sm={4} xs={6}>
									<Card.Img variant="top" src="icon_black.png" className="avatar" bsPrefix />
									<Card.Subtitle className="mb-2">
										<b />
									</Card.Subtitle>
								</Col>
								<Col lg={10} md={9} sm={8} xs={6}>
									<Card.Subtitle className="mb-2">Air Quality Index: 101-150</Card.Subtitle>
									<div className="Aqi_num">
										<p className="aqiheadlinedark">
											Mid-range pollutants present. Air on the side of caution and favor indoor
											activities to limit outdoor exposure.
										</p>
									</div>
									<div align="right">
										<div className="cardicons" align="right">
											<Image src="bonsai.svg" />
										</div>
									</div>
								</Col>
							</Row>
						</Card.Body>
					</Card>

					<Card className="alert4">
						<Card.Body>
							<Row>
								<Col lg={2} md={3} sm={4} xs={6}>
									<Card.Img variant="top" src="icon_white.png" className="avatar" bsPrefix />
								</Col>
								<Col lg={10} md={9} sm={8} xs={6}>
									<Card.Subtitle className="mb-2">Air Quality Index: 151-200</Card.Subtitle>
									<div className="Aqi_num">
										<p className="aqiheadlinedark">
											Take it easy and take shelter. Limit outdoor time or heavy exertion in favor
											of indoor playtime.
										</p>
									</div>
									<div align="right">
										<div className="cardicons" align="right">
											<Image src="factory4.svg" />
										</div>
									</div>
								</Col>
							</Row>
						</Card.Body>
					</Card>

					<Card className="alert5">
						<Card.Body>
							<Row>
								<Col lg={2} md={3} sm={4} xs={6}>
									<Card.Img variant="top" src="icon_white.png" className="avatar" bsPrefix />
									<Card.Subtitle className="mb-2">
										<b />
									</Card.Subtitle>
								</Col>
								<Col lg={10} md={9} sm={8} xs={6}>
									<Card.Subtitle className="mb-2" className="aqiwhitenum">
										Air Quality Index: 201-300
									</Card.Subtitle>
									<div className="Aqi_num">
										<p className="aqiheadline">
											Significant health risks. Avoid prolonged outdoor exposure and reschedule if
											you are experiencing symptoms such as coughing or throat irritation.
										</p>
									</div>
									<div align="right">
										<div className="cardicons" align="right">
											<Image src="factory3.svg" />
										</div>
									</div>
								</Col>
							</Row>
						</Card.Body>
					</Card>

					<Card className="alert6">
						<Card.Body>
							<Row>
								<Col lg={2} md={3} sm={4} xs={6}>
									<Card.Img variant="top" src="icon_white.png" className="avatar" bsPrefix />
									<Card.Subtitle className="mb-2">
										<b />
									</Card.Subtitle>
								</Col>
								<Col lg={10} md={9} sm={8} xs={6}>
									<Card.Subtitle className="mb-2" className="aqiwhitenum">
										Air Quality Index: 300+
									</Card.Subtitle>
									<div className="Aqi_num">
										<p className="aqiheadline">
											Lethal Conditions. Serious lung and heart effects that can affect mortality.
											Everyone should avoid all outdoor exertion.
										</p>
									</div>
									<div align="right">
										<div className="cardicons" align="right">
											<Image src="factory1.svg" />
										</div>
									</div>
								</Col>
							</Row>
						</Card.Body>
					</Card>

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

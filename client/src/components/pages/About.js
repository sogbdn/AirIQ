import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

//page not actually defined yet
export default class About extends Component {
	componentDidMount() {
		console.log('About Mounted');
	}
	render() {
		return (
			<div>
				<Container>
					<Card>
						<Card.Body>
							<Row>
								<Col sm>
								<p>By Registering with us you get access to:</p>
								<div className="gradient"/>
									<li>Quick and Visually Digestible info on Air Quality</li>
									<li>
										Tailored Recommendations based on health concern, in relation to air quality
									</li>
									<li>Map View of Surrounding Air Quality Indexes, based on Geolocation</li>
									<li>
										Optional SMS alerts, which can be sent on paticularly bad, OR particularly great days for enjoying outdoor air-filled adventures.
										
									</li>
								</Col>
							</Row>
						</Card.Body>
					</Card>
				</Container>
			</div>
		);
	}
}

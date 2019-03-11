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
									<li>Quick and Visually Digestible info on Air Quality</li>
									<li>
										Tailored Recommendations based on health concern, in relation to air quality
									</li>
									<li>Map View of Surrounding Air Quality Indexed, based on Geolocation</li>
									<li>
										Optional SMS alerts, for when Air Quality is paticularly bad, OR and SMS
										suggesting this is a great day for an adventure, on days the air quality is very
										good
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

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
		console.log('------->>>>>>', this.props.coords)
		// if (!this.props.isGeolocationAvailable) {
		// 	return <div><Container><Card bg="unavailable"><Card.Body><Row><div className="Aqicontainer"><p className="aqiheadline">Please enable Geoloction to use this App</p></div></Row></Card.Body></Card></Container>
		// </div>;
		// } else if (!this.props.isGeolocationEnabled) {
		// 	return <div><Container><Card bg="unavailable"><Card.Body><Row><div className="Aqicontainer"><p className="aqiheadline">Geoloction Not Enabled. Please Check your preferences to view Live Data reading for your location.</p></div></Row></Card.Body></Card></Container>
		// 	</div>;
		// } else if (this.props.coords) {
			return (
				<AQIretrieve updateLatAndLng={this.props.updateLatAndLng} lat={43.716005} lng={-79.393509} 
				updatestateAQI={this.props.updatestateAQI} aqi={this.props.aqi}/>
			);
		// } else {
		// 	return <div><Container><Card bg="unavailable"><Card.Body><Row><div className="Aqicontainer"><p className="aqiheadline">Getting Geolaction Data . . .</p><hr/></div></Row></Card.Body></Card></Container>
		// 	</div>;
		// }
	}
}

// export default geolocated({
// 	positionOptions: {
// 		enableHighAccuracy: false
// 	},
// 	userDecisionTimeout: 0
// })(Geolocation);

export default Geolocation
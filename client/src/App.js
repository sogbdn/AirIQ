import React, { Component } from 'react';
import NavBar from './NavBar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Registration from './components/pages/Registration';
import Login from './components/pages/Login';
import UserProfile from './components/pages/UserProfile';
import MapView from './components/pages/MapView';
import AirIndex from './components/pages/AirIndex';
//import AirCard from './components/partials/_AirCard';
import About from './components/pages/About';
import RegistrationComp from './components/pages/Registrationcomplete';
import Geolocation from './components/partials/Geolocation.js';
import axios from 'axios';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			lat: props.lat,
			lng: props.lng,
			aqi: '',
			city: 'Montreal'
		};
		this.updateLatAndLng = this.updateLatAndLng.bind(this)
		this.updatestateAQI = this.updatestateAQI.bind(this)
	}
	componentDidMount() {
		console.log('Components Mounted!');
		this.updatestateAQI(45.297756, -73.382723)
	}
	updateLatAndLng(lat,lng,city){
		this.setState({
			lat: lat,
			lng: lng,
			aqi:'',
			city: city  //it can just be city in the new ES

		})
	}

	// updateCity(city){
	// 	this.setState({
	// 		city:city
	// 	})
	// }



	updatestateAQI(lat,lng){
			axios
				.get(
					`http://localhost:3001/airqualityAPI?lat=${lat}&long=${lng}`
				)
				.then((res) => {
					console.log('AirVisual response', res);
	
					// temporary error handler for when no_nearest_city
					if (res.data.status === "fail") {
						this.state.aqi = ('undefined' )
						return res.data.data.message
					}
					console.log('aqius', res.data.data.current.pollution.aqius);
					this.setState ({
						aqi:res.data.data.current.pollution.aqius
					})
				});
	}


	render() {
		return (
			<Router>
				<>
					<div className="Menu">
					<Route render={()=>
						<>
						<NavBar />
					<Switch>
						<Route exact path="/" render={ () => <Geolocation displaymap = 'false' updateLatAndLng={this.updateLatAndLng} updatestateAQI={this.updatestateAQI} aqi={this.state.aqi} city={this.state.city}/> } />
						<Route exact path="/features" component={About} />
						<Route path="/airQindex" component={AirIndex} />
						<Route path="/login" component={Login} />
						<Route path="/user" component={UserProfile} />
						<Route exact path="/register" component={Registration} />
						<Route path="/registrationcomplete" component={RegistrationComp} />
						<Route path="/map" render={ () => <MapView  updatestateAQI={this.updatestateAQI} displaymap='true' updatelat={this.state.lat} updatelng={this.state.lng} aqi4map={this.state.aqi} /> } />
					</Switch>
					</>
					} />
					
					</div>
					</>
			</Router>
		
		);
	}
}

export default App;

//<AqCard recommendation = {this.state.user_profile}  username = {this.state.currentUser.name}/>

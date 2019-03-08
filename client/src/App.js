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

class App extends Component {
	componentDidMount() {
		console.log('Components Mounted!');
	}
	render() {
		return (
			<Router>
				<div>
					<div className="Menu">
						<NavBar />
					</div>
					<Switch>
						<Route exact path="/" component={ () => <Geolocation displaymap = 'false'/> } />
						<Route exact path="/features" component={About} />
						<Route path="/airQindex" component={AirIndex} />
						<Route path="/login" component={Login} />
						<Route path="/user" component={UserProfile} />
						<Route exact path="/register" component={Registration} />
						<Route path="/registrationcomplete" component={RegistrationComp} />
						<Route path="/map" component={ () => <MapView  displaymap='true'/> } />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;

//<AqCard recommendation = {this.state.user_profile}  username = {this.state.currentUser.name}/>

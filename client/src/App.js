import React, { Component } from 'react';
import NavBar from './NavBar';
import './App.css';
import withAuth from './components/withAuth';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Registration from './components/pages/Registration';
import Login from './components/pages/Login';
import UserProfile from './components/pages/UserProfile';
import MapView from './components/pages/MapView';
import AirIndex from './components/pages/AirIndex';
import About from './components/pages/About';
import RegistrationComp from './components/pages/Registrationcomplete';
import AQIgeolocated from './components/partials/AQIgeolocated';

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
						<Route exact path="/" component={AQIgeolocated} />
						<Route exact path="/concerns" component={About} />
						<Route path="/airQuality" component={AirIndex} />
						<Route path="/login" component={Login} />
						<Route path="/user" component={UserProfile} />
						<Route exact path="/register" component={Registration} />
						<Route path="/registrationcomplete" component={RegistrationComp} />
						<Route path="/map" component={withAuth(MapView)} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;

//<AqCard recommendation = {this.state.user_profile}  username = {this.state.currentUser.name}/>

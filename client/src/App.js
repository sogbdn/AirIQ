import React, { Component } from 'react';
import NavBar from './NavBar';
import './App.css';
import AQIretrieve from './components/partials/AQIretrieve';
import Geolocation from './components/partials/Geolocation';

class App extends Component {
	componentDidMount() {
		console.log('Components Mounted!');
	}
	render() {
		return (
			<div>
				<div className="Menu">
					<NavBar />
				</div>
			</div>
		);
	}
}

export default App;

//<AqCard recommendation = {this.state.user_profile}  username = {this.state.currentUser.name}/>

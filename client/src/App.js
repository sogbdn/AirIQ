import React, { Component } from 'react';

import Register from './Register';
import MapView from './MapView';
import NavBar from './NavBar';
import AqCard from './AqCard';
import './App.css';
import AQIretrieve from './components/partials/AQIretrieve';
import Geolocation from './components/partials/Geolocation';

class App extends Component {
	// constructor(props) {
	//   super(props);
	//   this.state = {
	//     currentUser: {name: "Anonymous"},
	//     messages: [],
	//     numusers: 0,
	//     //key: uuidv4(); --- this did nothing to solve error message
	//   };
	// }

	componentDidMount() {
		console.log('Components Mounted!');
	}
	render() {
		return (
			<div>
				<div className="Menu">
					<NavBar />
				</div>
				<div>
					<Geolocation />
					<AQIretrieve />
				</div>
			</div>
		);
	}
}

export default App;

//<AqCard recommendation = {this.state.user_profile}  username = {this.state.currentUser.name}/>

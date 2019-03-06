import React, { Component } from 'react';
// https://unpkg.com/react-bootstrap@1.0.0-beta.5/Form.js
//import Form from 'react-bootstrap/Form';
//import Button from 'react-bootstrap/Button';

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapViews extends Component {

  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

    onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
    };

  componentDidMount() {
    console.log("Map Mounted");
  }
  render() {
    return (
      <Map google={this.props.google} zoom={14}
      onClick={this.onMapClicked}
      initialCenter={{lat: 45.496338, lng: -73.570732}}
      >
  
      <Marker onClick={this.onMarkerClick}
              name={'Current location'} 
              position={{lat: 45.496338, lng: -73.570732}} //first to say this is javascript the second to say this is an object
              />

  <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>'something'</h1>
            </div>
        </InfoWindow>
      </Map>
    );
    
  }
}
       
export default GoogleApiWrapper({
  apiKey: ('AIzaSyDNAgi4SP4LXKpgJJptoGktkbtO4OhxQpc')
})(MapViews)

//initalCenter: Takes an object containing latitude and longitude coordinates. Sets the maps center upon loading.

// center: Takes an object containing latitude and longitude coordinates. Use this if you want to re-render the map after the initial render.

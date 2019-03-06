import React, { Component } from "react";


import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


export class MapView extends Component {

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
        <div>
        <div>{this.props.airQuality}</div>
        <Map google={this.props.google} zoom={14}
        onClick={this.onMapClicked}
        initialCenter={{lat: 45.496338, lng: -73.570732}}
        >

        <Marker onClick={this.onMarkerClick}
          name={'Current location'}
          position={{lat: 45.496338, lng: -73.570732}} //first to say this is javascript the second to say this is an object
          />

<Marker onClick={this.onMarkerClick}
          name={'Current location'}
          position={{lat: this.props.latitude, lng: this.props.longitude}} //first to say this is javascript the second to say this is an object
          />
              

    <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
              <div>
                <h1>'something'</h1>
              </div>
          </InfoWindow>
        </Map>
        </div>
      );

    }
  }

  export default GoogleApiWrapper({
    apiKey: ('AIzaSyDNAgi4SP4LXKpgJJptoGktkbtO4OhxQpc')
  })(MapView)

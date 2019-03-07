import React, { Component } from "react";


import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapView extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {marker: {}},
    points: [
      { id: 1, lat: 45.496338, lng: -73.570732, airiq: 57 },
      { id: 2, lat: 45.496338, lng: -73.670732, airiq: 73 },
      { id: 3, lat: 45.496338, lng: -73.560932, airiq: 33 },
      { id: 4, lat: 45.496338, lng: -73.550732, airiq: 45, icon: "/marker_1.png" }
    ]
  };

  
  // <Marker onClick={this.onMarkerClick}
  //         name={'Current location'}
  //         position={{lat: 45.496338, lng: -73.570732}} //first to say this is javascript the second to say this is an object
  //         />


    onMarkerClick = (props, marker, e) => {
      console.log(props)
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
    }

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

      {return !this.props.displaymap ? null :
       <div>
        <div>{this.props.airQuality}</div>
        <Map google={this.props.google} zoom={14}
        onClick={this.onMapClicked}
        initialCenter={{lat: 45.496338, lng: -73.570732}}
        >
        {this.state.points.map(p => <Marker marker={{'airiq': p.airiq}} key={p.id} onClick={this.onMarkerClick} position={{lat: p.lat, lng: p.lng}} icon={{url:"/marker_1.png"}} />)}
        <InfoWindow visible={this.state.showingInfoWindow} marker={this.state.activeMarker}>
            <div>
              <p>{this.state.selectedPlace.marker.airiq}</p>
            </div>
        </InfoWindow> 
        </Map>
        </div>
      //);
      }
    }
  }

  export default GoogleApiWrapper({
    apiKey: ('AIzaSyDNAgi4SP4LXKpgJJptoGktkbtO4OhxQpc')
  })(MapView)

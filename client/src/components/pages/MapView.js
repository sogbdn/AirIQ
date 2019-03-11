import React, { Component } from "react";


import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapView extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {marker: {}},
    points: [
      { id: 1, lat: 45.495338, lng: -73.570732, airiq: this.props.airQuality, icon: "/marker_2.png" },
      { id: 2, lat: 45.494338, lng: -73.670732, airiq: 73, icon: "/marker_2.png" },
      { id: 3, lat: 45.484338, lng: -73.560932, airiq: 33, icon: "/marker_1.png" },
      { id: 4, lat: 45.496338, lng: -73.550732, airiq: 45, icon: "/marker_4.png" }
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
        showingInfoWindow: true,
        updatelat: this.props.lat,
        updatelng: this.props.lng
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
      ////this.props.updatestateAQI(this.props.lat, this.props.lng)
    }
    render() {
      const {updatelat = 45.496338, updatelng = -73.570732} = this.props
      console.log('imrendering: ',this.props.displaymap)
      return (!this.props.displaymap ? null :
       <div>
        <div>{this.props.airQuality}</div>
        <Map google={this.props.google} zoom={14}
        onClick={this.onMapClicked}
        initialCenter={{lat: updatelat, lng: updatelng}}
        style={{width: '100%', height: '90%', position: 'relative'}}
        >
        {this.state.points.map(p => <Marker marker={{'airiq': this.props.aqi4map}} key={p.id} onClick={this.onMarkerClick} position={{lat: updatelat, lng: updatelng}} />)}
        <InfoWindow visible={this.state.showingInfoWindow} marker={this.state.activeMarker}>
            <div>
              <p>{this.state.selectedPlace.marker.airiq}</p>
            </div>
        </InfoWindow>
        </Map>
        </div>
      //);
      )  
    }
  }

  export default GoogleApiWrapper({
    apiKey: ('AIzaSyCAg5dTNT0GTYd9Erimp159mQC55f-nlKo')
  })(MapView)

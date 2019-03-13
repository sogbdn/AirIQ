import React, { Component } from "react";


import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapView extends Component {
  state = {
    showingInfoWindow: true,
    activeMarker: {},
    selectedPlace: {marker: {}},
    points: [
      { id: 1, lat: 45.494338, lng: -73.670732, airiq: 88  },
      { id: 2, lat: 45.484338, lng: -73.560932, airiq: 76 },
      { id: 3, lat: 45.496338, lng: -73.550732, airiq: 33 },
      { id: 4, lat: 45.487469, lng: -73.579559, airiq: 88 },
      { id: 5, lat: 45.502028, lng: -73.594239, airiq: 5 },
      { id: 6, lat: 45.603978, lng: 45.603978, airiq: 1 },
      { id: 7, lat: 31.524334, lng: 121.301135, airiq: 45 },
      { id: 8, lat: 31.182217, lng: 120.584088, airiq: 20 },
      { id: 9, lat: 33.253224, lng: 120.016737, airiq: 101 },
      { id: 10, lat: 44.052111, lng: -79.260258, airiq: 66 }
    ]
  };

  markerSelect = (airquality) => {
    if (airquality >= 0 && airquality < 50){
      return "/circle1.svg"
    }
    else if (airquality >= 50 && airquality < 100){
      return "/circle2.svg"
    }
    else if (airquality < 150 && airquality >= 100){
      return "/circle3.svg"
    }
    else if (airquality >= 150 && airquality < 200){
      return "/circle4.svg"
    }
    else if (airquality >= 200 && airquality <300){
      return "/circle5.svg"
    }
    else if (airquality >= 300){
      return "/circle5.svg"
    }
    else {
      return ""
    }
  }
  

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
      const {updatelat = 45.496338, updatelng = -73.570732, aqi4map = 11} = this.props
      console.log('imrendering: ',this.props.displaymap)
      return (!this.props.displaymap ? null :
       <div>
        <div>{this.props.airQuality}</div>
        <Map google={this.props.google} zoom={14}
        onClick={this.onMapClicked}
        initialCenter={{lat: updatelat, lng: updatelng}}
        styles= {
          // [{ stylers: [{ 'saturation': 0 }, { 'gamma': 0.8 }] }] 
          [
            {
                "featureType": "all",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "weight": "2.00"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#9c9c9c"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#f2f2f2"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 45
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#7b7b7b"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#46bcec"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#c8d7d4"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#070707"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            }
        ]
        }
        style={{width: '100%', height: '90%', position: 'relative'}}
        >
         <Marker 
        marker={{'airiq': aqi4map}} 
        onClick={this.onMarkerClick} 
        position={{lat: updatelat, lng: updatelng}} 
        icon= {this.markerSelect(this.props.aqi4map)}
        />

        {this.state.points.map(p => 
        <Marker 
        
        marker={{'airiq': p.airiq}} 
        key={p.id} onClick={this.onMarkerClick} 
        position={{lat: p.lat, lng: p.lng}} 
        icon= {this.markerSelect(p.airiq)}
        />)}
        
        <InfoWindow visible={this.state.showingInfoWindow} marker={this.state.activeMarker}>
            <div>
              <h3>AQI level:{this.state.selectedPlace.marker.airiq}</h3>
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

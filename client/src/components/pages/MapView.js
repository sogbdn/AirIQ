import React, { Component } from "react";


import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapView extends Component {
  state = {
    showingInfoWindow: true,
    activeMarker: {},
    selectedPlace: {marker: {}},
    points: [
      { id: 1, lat: 45.494338, lng: -73.670732, airiq: 76  },
      { id: 2, lat: 45.484338, lng: -73.560932, airiq: 33 },
      { id: 3, lat: 45.496338, lng: -73.550732, airiq: 160 }
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
          [{ stylers: [{ 'saturation': 0 }, { 'gamma': 0.8 }] }] 
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
              <h2>AQI level:{this.state.selectedPlace.marker.airiq}</h2>
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

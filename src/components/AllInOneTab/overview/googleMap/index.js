import React, {Component} from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';


const containerStyle = {
  // position: 'relative',  
  width: '300px',
  height: '160px'
}

export class MapContainer extends Component {
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
   
    render() {
      return (
        <Map google={this.props.google}
        containerStyle={containerStyle}
            onClick={this.onMapClicked}>
          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />
        </Map>
      )
    }
  }

export default GoogleApiWrapper({
   apiKey: ("AIzaSyByQIkm4BMvLG_i3ii_9obM9Y8dksh9HA4")
//    apiKey: ("430560948108-sjbt8qoepbh55hsltc39vt8rsls6as9j.apps.googleusercontent.com")
})(MapContainer)
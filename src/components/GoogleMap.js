import React, { PureComponent } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


const style = {
  width: '60%',
  height: '60%'
}

export class GoogleMap extends PureComponent {
render() {
    return (
      <Map google={this.props.google}
          style={style}
          initialCenter={{
            lat: 52.3666451,
            lng: 4.892397
          }}
          zoom={15}
          onClick={this.onMapClicked}
          >

        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyAAm7YTvmidIkAT5mapqJn1F_N8WfKQzgE')
})(GoogleMap)

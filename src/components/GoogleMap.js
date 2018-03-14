import React, { PureComponent } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


const style = {
  width: '100%',
  height: '100%',
  position: 'relative'
}

export class GoogleMap extends PureComponent {

  renderMarker = (row, index) => {
    console.log(row)
    return (
      <Marker
      name={row.name}
      position={{lat: row.coordinate[0], lng: row.coordinate[1]}}
      />
    )
  }


render() {
    return (
      <Map google={this.props.google}
          style={style}
          initialCenter={{
            lat: 52.3666451,
            lng: 4.892397
          }}
          zoom={13}
          onClick={this.onMapClicked}
          >

          {this.props.officeRows ? this.props.officeRows.map(this.renderMarker) : ""}

      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyAAm7YTvmidIkAT5mapqJn1F_N8WfKQzgE')
})(GoogleMap)

import React, { Component } from "react"
import GoogleMapReact from "google-map-react"
import style from "styled-components"

const Marker = style.div`
position: absolute;
top: 50%;
left: 50%;
width: 18px;
height: 18px;
background-color: #c2a385;
border: 2px solid #fff;
border-radius: 100%;
span {
	padding-left: 18px;
	font-weight: bold;
	font-size: 12px;
}
`
const dixCottageLatLng = {
  lat: 52.95949013103227,
  lng: 0.578780132199654,
}

const handleApiLoaded = (map, maps) => {
  map.setOptions({
    styles: [{ featureType: "poi.business", stylers: [{ visibility: "off" }] }],
  })
}

class Map extends Component {
  static defaultProps = {
    center: dixCottageLatLng,
    zoom: 16,
  }

  render() {
    return (
      <div style={{ height: "50vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCeoIMo0cYerOPmzqqh-yurkMEnYWi1QCo" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        >
          <Marker lat={this.props.center.lat} lng={this.props.center.lng}>
            <span>Dix Cottages</span>
          </Marker>
        </GoogleMapReact>
      </div>
    )
  }
}

export default Map

import React, { Component } from 'react';
import L from 'leaflet';
import { Map, TileLayer, Marker } from 'react-leaflet';
import ReactLeafletSearch from "react-leaflet-search";

const myIcon = L.icon({
    iconUrl: "marker-icon.png",
    iconRetinaUrl: "marker-icon-2x.png",
    shadowUrl: "marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41]
});

var long = 35.204105;
var lat = 31.906091;


class MyMap extends Component 
{
    state = {
        lat: lat,
        lng: long,
        zoom: 10,
      }

    render() {
        var position = [this.state.lat, this.state.lng]

        return (
            <Map center={position} zoom={this.state.zoom}>
              <ReactLeafletSearch position="topright" provider="OpenStreetMap"/>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} icon={myIcon}></Marker>
            </Map>
        );
    }
}

export default MyMap;


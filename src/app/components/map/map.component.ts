import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

const iconRetinaUrl = '../../../assets/leaflet/marker-icon-2x.png';
const iconUrl = '../../../assets/leaflet/marker-icon.png';
const shadowUrl = '../../../assets/leaflet/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.styl']
})
export class MapComponent implements AfterViewInit {
private map;

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 48.5010, 32.2429 ],
      zoom: 18
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

    let marker = L.marker([ 48.5010, 32.2429 ])
    marker.addTo(this.map);

  }

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
  }
}
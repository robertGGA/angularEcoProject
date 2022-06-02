import { Component, OnInit, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { MapService } from '@services/map.service';

@Component({
	selector: 'app-map-page',
	templateUrl: './map-page.component.html',
	styleUrls: ['./map-page.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapPageComponent implements AfterViewInit {
	private map: L.Map | undefined;

	constructor(public mapService: MapService) {
	}

	private initMap() {
		this.map = L.map('map').setView([55.789190, 49.116084], 13);

		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
			maxZoom: 18,
			tileSize: 512,
			zoomOffset: -1,
		}).addTo(this.map);

	}

	ngAfterViewInit(): void {
		this.initMap();
	}

}

import { Component, OnInit, Input } from '@angular/core';
import { Image } from '../../shared/image.model';
import { appConfig } from '../../shared/app-config';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  latitude: number;
  longitude: number;
  zoom = 15;

  @Input() images: Image[];

  ngOnInit() {
    this.setInitialLocation();
  }

  getLatitude() {
    return this.images.length === 0 ? this.latitude 
                                    : this.images[this.images.length -1].latitude;
  }

  getLongitude() {
    return this.images.length === 0 ? this.longitude 
                                    : this.images[this.images.length -1].longitude;
  }

  private setInitialLocation() {
    if ('geolocation' in  navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
      });
    } else {
        this.latitude = appConfig.INITIAL_LATITUDE;
        this.longitude = appConfig.INITIAL_LONGITUDE;
    }
  } 
}

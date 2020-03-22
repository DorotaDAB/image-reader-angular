import { Component, OnInit, Input } from '@angular/core';
import { Image } from '../../model/image.model';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  latitude: number;
  longitude: number;
  zoom = 10;

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
        this.latitude = 52.234334;
        this.longitude = 21.006953;
    }
  } 
}

import { Component, OnInit, Input } from '@angular/core';
import { Image } from "../../model/image.model";
import exifr from 'exifr';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  @Input() image: Image;

  constructor() { }

  getFormattedImageSize(): string {
    return Math.round(this.image.size / 1024) + ' KB';
  }

  async onImageLoad(eventData) {
    let gpsData  = await exifr.gps(eventData.target);

    this.image.latitude = gpsData.latitude;
    this.image.longitude = gpsData.longitude;
  };

  ngOnInit() {
  }

}

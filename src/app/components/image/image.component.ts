import { Component, OnInit, Input, Output, EventEmitter,} from '@angular/core';
import { Image } from "../../shared/image.model";
import { MatSnackBar } from "@angular/material";
import { appConfig } from '../../shared/app-config';

import exifr from 'exifr';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  @Input() image: Image;

  @Output() imageDeleted = new EventEmitter;

  constructor(public snackBar: MatSnackBar) { }

  getFormattedImageSize(): string {
    return Math.round(this.image.size / appConfig.ONE_KB) + ' KB';
  }

  openSnackBar(message: string, action: string) { 
    this.snackBar.open(message, action);
  }

  async onImageLoad(eventData) {
    let gpsData  = await exifr.gps(eventData.target);

    if (gpsData !== undefined) { 
      this.image.latitude = gpsData.latitude;
      this.image.longitude = gpsData.longitude;
    } else {
      this.openSnackBar('No GPS data availabe.', 'ok');
    }
  };

  onDeleteImage() {
    this.imageDeleted.emit(this.image.id);
  }

  ngOnInit() {
  }

}

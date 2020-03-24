import { Component, OnInit, Input, Output, EventEmitter,} from '@angular/core';
import { Image } from "../../model/image.model";
import { MatSnackBar } from "@angular/material";

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
    return Math.round(this.image.size / 1024) + ' KB';
  }

  openSnackBar(message: string) { 
    this.snackBar.open(message, 'ok');
  }

  async onImageLoad(eventData) {
    let gpsData  = await exifr.gps(eventData.target);

    if (gpsData !== undefined) { 
      this.image.latitude = gpsData.latitude;
      this.image.longitude = gpsData.longitude;
    } else {
      this.openSnackBar('No GPS data availabe.');
    }
  };

  onDeleteImage() {
    this.imageDeleted.emit(this.image.id);
  }

  ngOnInit() {
  }

}

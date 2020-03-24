import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Image } from '../../model/image.model';
import { MatSnackBar } from "@angular/material";

@Component({
  selector: 'app-image-importer',
  templateUrl: './image-importer.component.html',
  styleUrls: ['./image-importer.component.css']
})
export class ImageImporterComponent implements OnInit {
  imageId = 1;

  @Output() imageUploaded = new EventEmitter<Image>();
  
  constructor(public snackBar: MatSnackBar) { }

  openSnackBar(message: string) { 
    this.snackBar.open(message, 'ok');
  } 

  onChange(eventData) {
    if (eventData.target.files.length > 0) {
			if (eventData.target.files[0].type !== "image/jpeg") {
        this.openSnackBar('Not supported file type. Please choose *.jpg file.');
				return;
			}
			if (eventData.target.files[0].size > 1024*1024) {
        this.openSnackBar('File size is too large. Please choose files smaller than 1 MB.');
				return;
      }
    }
      
    let image = {
      file: URL.createObjectURL(eventData.target.files[0]),
      name: eventData.target.files[0].name,
      size: eventData.target.files[0].size,
      type: eventData.target.files[0].type,
      id: this.imageId
    }
    ++this.imageId;
    this.imageUploaded.emit(image);
    eventData.target.value = "";
  }

  ngOnInit() {
  }

}

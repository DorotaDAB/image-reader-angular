import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Image } from '../../model/image.model';

@Component({
  selector: 'app-image-importer',
  templateUrl: './image-importer.component.html',
  styleUrls: ['./image-importer.component.css']
})
export class ImageImporterComponent implements OnInit {
  @Output() imageUploaded = new EventEmitter<Image>();
  imageId = 1;

  constructor() { }

  onChange(eventData) {
    if (eventData.target.files.length > 0) {
			if (eventData.target.files[0].type !== "image/jpeg") {
				alert('Not supported file type. Please choose *.jpg file.');
				return;
			}
			if (eventData.target.files[0].size > 1024*1024) {
				alert('Not supported file size. Please choose files smaller than 1 MB.');
				return
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

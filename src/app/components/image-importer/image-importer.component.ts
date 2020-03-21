import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Image } from '../../model/image.model';

@Component({
  selector: 'app-image-importer',
  templateUrl: './image-importer.component.html',
  styleUrls: ['./image-importer.component.css']
})
export class ImageImporterComponent implements OnInit {
  @Output() imageUploaded = new EventEmitter<Image>();

  constructor() { }

  onChange(eventData) {
    let image = {
      file: eventData.target.files[0].file,
      name: eventData.target.files[0].name,
      size: eventData.target.files[0].size,
      type: eventData.target.files[0].type
    }
    this.imageUploaded.emit(image);
  }

  ngOnInit() {
  }

}

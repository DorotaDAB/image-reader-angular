import { Component, OnInit } from '@angular/core';
import { Image } from '../../model/image.model';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {
  images: Image[] = [];

  constructor() { }

  imageImport(image: Image) {
    this.images.push(image);
  }

  deleteImageImport(imageId: number) {
    let filteredImages = this.images.filter( (image) => {return image.id !== imageId});
		this.images = filteredImages;
  }

  ngOnInit() {
  }

}

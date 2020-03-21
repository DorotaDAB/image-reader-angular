import { Component, OnInit, Input } from '@angular/core';
import { Image } from "../../model/image.model";

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

  ngOnInit() {
  }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImageComponent } from './components/image/image.component';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';
import { ImageImporterComponent } from './components/image-importer/image-importer.component';
import { MapComponent } from './components/map/map.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    ImageGalleryComponent,
    ImageImporterComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

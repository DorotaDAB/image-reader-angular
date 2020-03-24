# ImageReaderAngular


This is a web application project allowing to upload, display *.jpeg files and marking images on Google Map on a basis of GPS coordinates.

* This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.20.

## Features available ##
* Upload file by drag&drop or file input,
* File size and type validation,
* Displaying: 
  * photo preview, 
  * file name, 
  * image size,
  * GPS coordinates (if available)
* Removing image form gallery.
* Displaying Google Maps:
  #### In order to enable integration with Google Maps, please enter your [Google-API key](https://support.google.com/googleapi/answer/6158862?hl=en) in shared/app-config.ts as GOOGLE_MAP_API_KEY. ####
* Marking images on the map on a basis of GPS coordinates,
* Removing markers from the map when image is deleted from gallery.

Online demo: https://dorotadab.github.io/image-reader-angular/

------------------

##  Steps to run the application ##

### In order to enable integration with Google Maps, please enter your [Google-API key](https://support.google.com/googleapi/answer/6158862?hl=en) in shared/app-config.ts as GOOGLE_MAP_API_KEY. ###

------------------

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

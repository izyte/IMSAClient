# IMSA Client Side Angular 9 Project
##### (Sandbox Client-Side Angular App to Test Server-Side API output and Auto-Generated TypeScript Angular Table Classes)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.8.

## Dependencies
- Angular 9 Framework
- Bootstrap 4 CSS Framework
- Fontawesome Library
- D3.js Data Visualization Library

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.0.
Upgrated to version 9.0.4.

## Implementing to new Client Application
- Create new Angular project
```text
ng new <project path>
```
update src/polyfills.ts to handle bootstrap 4 by runnning 
```text
ng add @angular/localize
```
  To get more help on setting up new Angular 9.1.3 (CLI: 1.6.9) project with bootstrap 4 and font awesome [Setup New Angular 9 Project from Scratch using Latest Angular CLI](https://www.positronx.io/setup-angular-6-project-using-bootstrap-4-sass-font-awesome-ng-bootstrap/).
- Copy src/app/api folder and its contents
- Create src/app/svc folder and copy app-dataset.service.ts into it.
- Copy AppGlobalVariables.scss to src/app folder. <br/>Include 
  ```scss
  // application specific css variables and style rules
  @import "./app/AppGlobalVariables.scss";
  ``` 
  in styles.scss
  
- set  absolute path of the ```src/app/svc/app.tables.ts``` and  ```app-dataset.service.ts``` files in ```app.settings.json``` file of the server-side api project
  ```json
  // Example
  {
     "PATH_TARGET_TYPESCRIPT_PATH":"D:\\Users\\alv\\Documents\\Data\\ngp\\imsa\\src\\app\\svc\\app.tables.ts",
     "PATH_TARGET_TYPESCRIPT_DATASET":"D:\\Users\\alv\\Documents\\Data\\ngp\\imsa\\src\\app\\svc\\app-dataset.service.ts",
  }
  ```
- Import app-dataset.service in app.module.ts and include it in the providers collection

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Custom Components, Classes and Services
import { AppDataset } from './svc/app-dataset.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [AppDataset],
  bootstrap: [AppComponent]
})
export class AppModule { }

```
- Set apiUrl property in ```app-dataset.service.ts``` to the server-side applicaion URL
- Create a github repository
- Initialize new angular project to link to the new repository
- Copy bk.bat
- Include the project backup routine in a multi-project backup script


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

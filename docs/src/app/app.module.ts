// default imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// application specific core classess imports
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

// Custom Components, Classes and Services
import { AppDataset } from './svc/app-dataset.service';
import { SandTestAComponent } from './cmp/sand-test-a/sand-test-a.component';


@NgModule({
  declarations: [
    AppComponent,
    SandTestAComponent
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
